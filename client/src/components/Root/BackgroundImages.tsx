import { useLocation } from "react-router-dom";
import lamp from "../../assets/photo-images/lamp.png";
import laptop from "../../assets/photo-images/laptop.jpg";

const BackgroundImages = () => {
	const location = useLocation();

	let showLaptop: boolean = false;

	if (location.pathname === "/") {
		showLaptop = true;
	}

	return (
		<div className="absolute inset-0 flex flex-col gap-16 justify-between items-center">
			{/* Lamp */}
			<img className="h-96 object-contain" src={lamp} />
			{/* Laptop */}
			<div
				className={`w-full relative ${
					showLaptop ? "opacity-100" : "opacity-0"
				} transition-opacity duration-1000`}
			>
				<div className="absolute -top-16 h-16 inset-x-0 bg-gradient-to-t from-black to-neutral-950" />
				<img className="w-full" src={laptop} />
				<div className="absolute inset-0 bg-black/50" />
			</div>
		</div>
	);
};

export default BackgroundImages;
