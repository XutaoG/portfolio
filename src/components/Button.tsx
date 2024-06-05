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
}

const Button = ({
	text,
	textFont,
	className,
	rounded,
	fill,
	large,
	fixedWidth,
	...rest
}: buttonProps) => {
	const buttonStyles = twMerge(
		classNames(
			"py-0.5 px-2 border border-neutral-400 rounded-md anonymous-pro",
			"bg-neutral-100",
			"dark:bg-neutral-500 dark:border-0",
			"hover:scale-125 transition-transform duration-300",
			textFont,
			{
				"rounded-full": rounded,
				"self-stretch": fill,
				"px-3 py-1 text-lg hover:scale-[1.1]": large,
				"w-32": fixedWidth,
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
