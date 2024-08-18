import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps extends ComponentPropsWithoutRef<"button"> {
	text?: string;
	textFont?: string;
	rounded?: boolean;
	fill?: boolean;
	large?: boolean;
	disableHover?: boolean;
	fixedWidth?: boolean;
}

const Button = ({
	text,
	textFont,
	rounded,
	fill,
	large,
	fixedWidth,
	disableHover,
	...rest
}: buttonProps) => {
	const buttonStyles = twMerge(
		classNames(
			// "py-0.5 px-2 border border-neutral-400 rounded-md anonymous-pro",
			// "bg-neutral-200 dark:bg-neutral-500 dark:border-0",
			// "hover:scale-[1.1] transition-transform duration-300",
			"py-0.5 px-2 border border-white anonymous-pro bg-black",
			// "bg-neutral-200 dark:bg-neutral-500 dark:border-0",
			"hover:scale-[1.1] transition-transform duration-300",
			textFont,
			{
				"rounded-full": rounded,
				"self-stretch grow hover:scale-[1.05]": fill,
				"px-3 py-1 text-lg hover:scale-[1.05]": large,
				"w-32": fixedWidth,
				"hover:scale-100": disableHover,
			}
		)
	);

	return (
		<button className={buttonStyles} {...rest}>
			<p className="text-nowrap">{text}</p>
		</button>
	);
};

export default Button;
