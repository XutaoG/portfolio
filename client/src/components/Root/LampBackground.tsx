import lamp from "../../assets/photo-images/lamp.png";

const LampBackground = () => {
	return (
		<div className="absolute inset-0 flex justify-center">
			<img className="h-96" src={lamp} />
		</div>
	);
};

export default LampBackground;
