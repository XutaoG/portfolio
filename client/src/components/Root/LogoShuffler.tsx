import diamondImg from "../../assets/logo-shuffle-images/diamond.png";
import illeniumImg from "../../assets/logo-shuffle-images/illenium.jpg";
import mortyImg from "../../assets/logo-shuffle-images/morty.jpg";
import ramenImg from "../../assets/logo-shuffle-images/ramen.jpg";
import catImg from "../../assets/logo-shuffle-images/cat.jpg";
import meIllustratedImg from "../../assets/logo-shuffle-images/me-illustrated.jpg";
import { useState } from "react";

const LogoShuffler = () => {
	const images = [
		diamondImg,
		illeniumImg,
		mortyImg,
		ramenImg,
		catImg,
		meIllustratedImg,
	];
	const [imageIndex, setImageIndex] = useState(0);

	// * Shuffle logo images
	const changeImage = () => {
		setImageIndex((val) => (val + 1) % images.length);
	};

	return (
		<button className="h-full cursor-pointer" onClick={changeImage}>
			<img
				className="h-full rounded-md object-contain"
				src={images[imageIndex]}
				alt="logo shuffle images"
			/>
		</button>
	);
};

export default LogoShuffler;
