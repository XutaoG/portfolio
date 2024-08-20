import GlowPanel from "../Reusable/GlowPanel";
import ScalingText from "../Reusable/ScalingText";

const LocationPanel = () => {
	return (
		<GlowPanel className="size-full grow flex justify-center items-center cursor-default">
			<ScalingText
				text="ORLANDO, FLORIDA"
				textStyle="text-3xl anton-sc-regular md:text-4xl lg:text-6xl tracking-widest"
				// constantFlow
			/>
		</GlowPanel>
	);
};

export default LocationPanel;
