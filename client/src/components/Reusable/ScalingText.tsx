import { useEffect, useRef, useState } from "react";

interface ScalingTextProps {
	text: string;
	textStyle?: string;
	constantFlow?: boolean;
}

const ScalingText = ({ text, textStyle, constantFlow }: ScalingTextProps) => {
	const initialIndexValue = constantFlow ? 0 : null;
	const [focusIndex, setFocusIndex] = useState<null | number>(
		initialIndexValue
	);
	const flowDirection = useRef(1);

	const onCharacterMouseEnter = (index: number) => {
		if (constantFlow) {
			return;
		}
		setFocusIndex(index);
	};

	const onTextMouseLeave = () => {
		if (constantFlow) {
			return;
		}
		setFocusIndex(null);
	};

	useEffect(() => {
		if (!constantFlow || focusIndex === null) {
			return;
		}

		const interval = setInterval(() => {
			setFocusIndex(focusIndex + flowDirection.current);
			if (
				focusIndex + flowDirection.current === text.length - 1 ||
				focusIndex + flowDirection.current === 0
			) {
				flowDirection.current *= -1;
			}
		}, 125);

		return () => clearInterval(interval);
	}, [constantFlow, focusIndex, text.length]);

	const firstNameLine = Array.from(text).map((c, index) => {
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
			className={`flex ${textStyle} cursor-default`}
			onMouseLeave={onTextMouseLeave}
		>
			{firstNameLine}
		</div>
	);
};

export default ScalingText;
