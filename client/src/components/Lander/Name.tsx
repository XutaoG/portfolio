import { useState } from "react";

interface ScalingNameProps {
	text: string;
}

const ScalingName = ({ text }: ScalingNameProps) => {
	const [focusIndex, setFocusIndex] = useState<null | number>(null);
	const firstName = text;

	const onCharacterMouseEnter = (index: number) => {
		setFocusIndex(index);
	};

	const onTextMouseLeave = () => {
		setFocusIndex(null);
	};

	const firstNameLine = Array.from(firstName).map((c, index) => {
		let scaleStyle = "";

		if (focusIndex !== null) {
			if (Math.abs(index - focusIndex) === 2) {
				scaleStyle = "scale-y-110";
			} else if (Math.abs(index - focusIndex) === 1) {
				scaleStyle = "scale-y-125";
			} else if (focusIndex === index) {
				scaleStyle = "scale-y-150";
			}
		}

		return (
			<div
				key={index}
				className={`${scaleStyle} origin-center transition-transform transform-gpu`}
				onMouseEnter={() => onCharacterMouseEnter(index)}
			>
				{c}
			</div>
		);
	});

	return (
		<div
			className="flex moderustic font-bold text-7xl sm:text-9xl "
			onMouseLeave={onTextMouseLeave}
		>
			{firstNameLine}
		</div>
	);
};

export default ScalingName;
