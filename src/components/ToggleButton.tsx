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
			<p className="poppins font-medium">{offText}</p>
			<button
				className="w-10 bg-gradient-to-r from-blue-700 to-purple-700
				flex justify-start items-center rounded-full p-1
				hover:scale-[1.2] transition-transform duration-300"
				onClick={onToggleClick}
			>
				<div
					className={`w-4 aspect-square bg-white rounded-full ${
						mode ? "translate-x-4" : ""
					}
					transition-transform duration-500`}
				></div>
			</button>
			<p className="poppins font-medium">{onText}</p>
		</div>
	);
};

export default ToggleButton;
