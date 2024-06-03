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
	dark?: boolean;
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
	const displayMode = useAppSelector((state) => state.system.displayMode);

	const styles = twMerge(
		classNames(
			"bg-neutral-100 py-0.5 px-2 border border-neutral-400 rounded-md anonymous-pro text-inherit",
			"hover:bg-neutral-200",
			textFont,
			{
				"rounded-full": rounded,
				"self-stretch": fill,
				"px-3 py-1 text-lg": large,
				"w-32": fixedWidth,
				"bg-transparent border-0": navStyle,
				"bg-neutral-300 hover:bg-neutral-300 cursor-default": selected,
				"border-0 hover:bg-neutral-600": displayMode,
				"bg-neutral-700 hover:bg-neutral-700": selected && displayMode,
			},
			className
		)
	);

	return (
		<button className={styles} {...rest}>
			{text}
		</button>
	);
};

export default Button;
