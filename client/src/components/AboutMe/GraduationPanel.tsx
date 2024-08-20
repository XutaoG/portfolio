import GlowPanel from "../Reusable/GlowPanel";

const GraduationPanel = () => {
	return (
		<GlowPanel className="size-full flex flex-col gap-2 md:gap-4 items-center justify-center inter cursor-default">
			<p className="font-light tracking-widest">Graduation</p>
			<p
				className="text-lg md:text-2xl tracking-wider font-light
				border-2 md:border-4 border-white border-dashed p-1 md:p-2 -rotate-3 architects-daughter-regular
				hover:rotate-3 transition-transform"
			>
				Spring 2026
			</p>
		</GlowPanel>
	);
};

export default GraduationPanel;
