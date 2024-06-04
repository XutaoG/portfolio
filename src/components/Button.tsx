import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { useAppSelector } from "../hooks";

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
	const darkMode = useAppSelector((state) => state.system.darkMode);

	const buttonStyles = twMerge(
		classNames(
			"bg-neutral-100 py-0.5 px-2 border border-neutral-400 rounded-md anonymous-pro",
			"hover:bg-neutral-200",
			textFont,
			{
				"rounded-full": rounded,
				"self-stretch": fill,
				"px-3 py-1 text-lg": large,
				"w-32": fixedWidth,
				"bg-transparent border-0 font-medium": navStyle,
				"bg-neutral-300 hover:bg-neutral-300 cursor-default": selected,
				"bg-neutral-500 border-0 hover:bg-neutral-600": darkMode,
				"bg-transparent border-0 hover:bg-neutral-600":
					darkMode && navStyle,
				"bg-neutral-700 hover:bg-neutral-700": selected && darkMode,
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
