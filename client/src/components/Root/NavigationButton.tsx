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
			// "py-0.5 px-2 rounded-md border-0 w-32 anonymous-pro font-medium text-center",
			// "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-600",
			// "hover:scale-[1.1] transition-navigation-button duration-300",
			"w-32 text-white poppins hover:text-blue-500 font-semibold",
			textFont,
			{
				// "bg-neutral-300 hover:bg-neutral-300 cursor-default dark:bg-neutral-700 dark:hover:bg-neutral-700 hover:scale-100":
				// 	selected,
				"hover:text-white border-b-2 border-white": selected,
				"w-auto self-stretch hover:scale-100 text-left": mobile,
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
