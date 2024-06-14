import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Label from "../Reusable/Label";
import { ComponentPropsWithRef, useState } from "react";

interface scrollNotchProps extends ComponentPropsWithRef<"button"> {
	selected?: boolean;
	text?: string;
	textFont?: string;
}

const ScrollNotch = ({
	selected,
	text,
	textFont,
	...rest
}: scrollNotchProps) => {
	const notchStyles = twMerge(
		classNames({
			"scale-150 cursor-default bg-gradient-to-r from-blue-700 to-purple-700":
				selected,
			"hover:scale-150 transition-transform duration-300 bg-neutral-600 dark:bg-neutral-900":
				!selected,
		})
	);

	const [labelState, setLabelState] = useState(false);

	// * Show or hide label as mouse enters
	const showLabel = () => {
		setLabelState(true);
	};
	const hideLabel = () => {
		setLabelState(false);
	};

	return (
		<div className="relative">
			<button
				className={`rotate-45 p-1.5 ${notchStyles}`}
				{...rest}
				onMouseEnter={showLabel}
				onMouseLeave={hideLabel}
			>
				<div className="w-2 h-2 bg-inherit border border-white" />
			</button>
			{labelState ? (
				<Label
					className="absolute right-10 top-0"
					text={text}
					textFont={textFont}
				/>
			) : null}
		</div>
	);
};

export default ScrollNotch;
