import classNames from "classnames";
import { ComponentPropsWithoutRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps extends ComponentPropsWithoutRef<"button"> {
	text?: string;
	textFont?: string;
	rounded?: boolean;
	large?: boolean;
	fill?: boolean;
	disableHover?: boolean;
	fixedWidth?: boolean;
}

const Button = ({
	text,
	rounded,
	large,
	fixedWidth,
	disableHover,
	fill,
	...rest
}: buttonProps) => {
	const [onHover, setOnHover] = useState(false);

	const onMouseEnter = () => {
		setOnHover(true);
	};

	const onMouseLeave = () => {
		setOnHover(false);
	};

	const buttonStyles = twMerge(
		classNames(
			"py-0.5 px-2 border-white rounded-lg",
			"bg-gradient-to-r from-blue-600/60 to-purple-600/60",
			"inter tracking-widest",
			{
				"rounded-full px-3": rounded,
				"basis-0 grow": fill,
				"px-3 py-1 text-lg hover:scale-[1.05]": large,
				"w-32": fixedWidth,
				"hover:scale-100": disableHover,
				"from-blue-600/90 to-purple-600/90": onHover,
			}
		)
	);

	return (
		<button
			className={buttonStyles}
			{...rest}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<p className="text-nowrap">{text}</p>
		</button>
	);
};

export default Button;
