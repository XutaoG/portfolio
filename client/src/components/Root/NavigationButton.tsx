import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface navigationButtonProps extends ComponentPropsWithoutRef<"button"> {
	text?: string;
	textFont?: string;
	selected?: boolean;
	mobile?: boolean;
	highlight?: boolean;
}

const NavigationButton = ({
	text,
	textFont,
	selected,
	mobile,
	highlight,
	...rest
}: navigationButtonProps) => {
	const buttonStyles = twMerge(
		classNames(
			"w-24 text-white tracking-wider inter hover:text-blue-500 font-medium",
			"transition-colors duration-300",
			textFont,
			{
				"hover:text-white border-b-2 border-white": selected,
				"w-auto self-stretch py-2": mobile,
				"bg-neutral-950 border-0 rounded-lg relative": highlight,
			}
		)
	);

	return (
		<button className={buttonStyles} {...rest}>
			{highlight && (
				<div
					className="absolute inset-0 rounded-lg
					bg-gradient-to-r from-blue-600 to-purple-600 blur-sm -z-50"
				/>
			)}
			<p className="text-nowrap">{text}</p>
		</button>
	);
};

export default NavigationButton;
