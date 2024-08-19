import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface navigationButtonProps extends ComponentPropsWithoutRef<"button"> {
	text?: string;
	textFont?: string;
	selected?: boolean;
	mobile?: boolean;
}

const NavigationButton = ({
	text,
	textFont,
	selected,
	mobile,
	...rest
}: navigationButtonProps) => {
	const buttonStyles = twMerge(
		classNames(
			"w-32 text-white poppins hover:text-blue-500 font-semibold",
			"transition-colors duration-300",
			textFont,
			{
				"hover:text-white bg-blue-600": selected,
				"w-auto self-stretch hover:scale-100 py-2": mobile,
			}
		)
	);

	return (
		<button className={buttonStyles} {...rest}>
			<p className="text-nowrap">{text}</p>
		</button>
	);
};

export default NavigationButton;
