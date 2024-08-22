interface GradientBorderLabelProps {
	text: string;
}

const GradientBorderLabel = ({ text }: GradientBorderLabelProps) => {
	return (
		<div className="bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-lg">
			<p className="px-2 moderustic font-bold tracking-widest text-lg bg-neutral-950 rounded-md">
				{text}
			</p>
		</div>
	);
};

export default GradientBorderLabel;
