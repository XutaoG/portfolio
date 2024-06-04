import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface labelProps {
	text?: string;
	textFont?: string;
	className?: string;
	rounded?: boolean;
	fill?: boolean;
	fixedWidth?: boolean;
}

const Label = ({
	text,
	textFont,
	className,
	rounded,
	fill,
	fixedWidth,
}: labelProps) => {
	const styles = twMerge(
		classNames(
			"bg-neutral-100 py-0.5 px-2 border border-neutral-400 rounded-md text-nowrap",
			"dark:bg-neutral-500 dark:border-0",
			textFont,
			{
				"rounded-full": rounded,
				"self-stretch": fill,
				"w-32": fixedWidth,
			},
			className
		)
	);

	return <div className={styles}>{text}</div>;
};

export default Label;
