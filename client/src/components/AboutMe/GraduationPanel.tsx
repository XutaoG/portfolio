const GraduationPanel = () => {
	return (
		<div
			className="h-full px-4 flex flex-col gap-4 items-center justify-center 
	bg-indigo-900 rounded-md inter"
		>
			<p className="font-light tracking-widest">Graduation</p>
			<p
				className="text-2xl tracking-wider font-light text-blue-500 
		border-4 border-blue-500 border-dashed p-2 -rotate-3 architects-daughter-regular
		hover:rotate-3 transition-transform"
			>
				Spring 2026
			</p>
		</div>
	);
};

export default GraduationPanel;
