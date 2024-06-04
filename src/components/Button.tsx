import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps extends ComponentPropsWithoutRef<"button"> {
	text?: string;
	textFont?: string;
	className?: string;
	rounded?: boolean;
	fill?: boolean;
	large?: boolean;
	fixedWidth?: boolean;
	navStyle?: boolean;
	selected?: boolean;
}

const Button = ({
	text,
	textFont,
	className,
	rounded,
	fill,
	large,
	fixedWidth,
	navStyle,
	selected,
	...rest
}: buttonProps) => {
	const buttonStyles = twMerge(
		classNames(
			"bg-neutral-100 py-0.5 px-2 border border-neutral-400 rounded-md anonymous-pro",
			"dark:bg-neutral-500 dark:border-0 dark:hover:bg-neutral-600",
			"hover:bg-neutral-200",
			textFont,
			{
				"rounded-full": rounded,
				"self-stretch": fill,
				"px-3 py-1 text-lg": large,
				"w-32": fixedWidth,
				"bg-transparent border-0 font-medium dark:bg-transparent dark:hover:bg-neutral-600":
					navStyle,
				"bg-neutral-300 hover:bg-neutral-300 cursor-default dark:bg-neutral-700 dark:hover:bg-neutral-700":
					selected,
			},
			className
		)
	);

	return (
		<button className={buttonStyles} {...rest}>
			{text}
		</button>
	);
};

export default Button;
