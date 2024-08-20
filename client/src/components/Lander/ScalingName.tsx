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
		let colorStyle = "";

		if (focusIndex !== null) {
			if (Math.abs(index - focusIndex) === 2) {
				scaleStyle = "scale-y-110";
				colorStyle = `${
					focusIndex > index ? "bg-gradient-to-l" : "bg-gradient-to-r"
				}  from-blue-300 to-blue-200 text-transparent bg-clip-text`;
			} else if (Math.abs(index - focusIndex) === 1) {
				scaleStyle = "scale-y-125";
				colorStyle = `${
					focusIndex > index ? "bg-gradient-to-l" : "bg-gradient-to-r"
				} from-purple-400 to-blue-300 text-transparent bg-clip-text`;
			} else if (focusIndex === index) {
				scaleStyle = "scale-y-150";
				colorStyle =
					"bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 text-transparent bg-clip-text";
			}
		}

		return (
			<div
				key={index}
				className={`${scaleStyle} ${colorStyle} origin-center transition-transform transform-gpu`}
				onMouseEnter={() => onCharacterMouseEnter(index)}
			>
				{c}
			</div>
		);
	});

	return (
		<div
			className="flex moderustic font-bold text-7xl sm:text-9xl pl-4"
			onMouseLeave={onTextMouseLeave}
		>
			{firstNameLine}
		</div>
	);
};

export default ScalingName;
