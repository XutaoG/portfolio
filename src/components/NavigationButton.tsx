import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface navigationButtonProps extends ComponentPropsWithoutRef<"button"> {
	text?: string;
	textFont?: string;
	className?: string;
	rounded?: boolean;
	fill?: boolean;
	fixedWidth?: boolean;
	selected?: boolean;
}

const NavigationButton = ({
	text,
	textFont,
	className,
	rounded,
	fill,
	fixedWidth,
	selected,
	...rest
}: navigationButtonProps) => {
	const buttonStyles = twMerge(
		classNames(
			"py-0.5 px-2 rounded-md border-0 anonymous-pro font-medium",
			"bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-600",
			"hover:scale-[1.1] transition-navigation-button duration-300",
			textFont,
			{
				"rounded-full": rounded,
				"self-stretch": fill,
				"w-32": fixedWidth,
				"bg-neutral-300 hover:bg-neutral-300 cursor-default dark:bg-neutral-700 dark:hover:bg-neutral-700 hover:scale-100":
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

export default NavigationButton;
