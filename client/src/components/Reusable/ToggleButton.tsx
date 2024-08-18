interface toggleButtonProps {
	offText: string;
	onText: string;
	onToggleClick: () => void;
	mode: boolean;
}

const ToggleButton = ({
	offText,
	onText,
	onToggleClick,
	mode,
}: toggleButtonProps) => {
	return (
		<div className="flex gap-2.5 items-center">
			<p className="inter tracking-wider">{offText}</p>
			<button
				className="w-10 bg-white
				flex justify-start items-center rounded-full p-1
				hover:scale-[1.2] transition-transform duration-300 transform-gpu"
				onClick={onToggleClick}
			>
				<div
					className={`w-4 aspect-square bg-gray-800 rounded-full ${
						mode ? "translate-x-4" : ""
					}
					transition-transform duration-500 transform-gpu`}
				></div>
			</button>
			<p className="inter tracking-wider">{onText}</p>
		</div>
	);
};

export default ToggleButton;
