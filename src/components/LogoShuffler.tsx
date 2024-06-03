import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import diamondImg from "../assets/logo-shuffle-images/diamond.png";
import illeniumImg from "../assets/logo-shuffle-images/illenium.jpg";
import mortyImg from "../assets/logo-shuffle-images/morty.jpg";
import ramenImg from "../assets/logo-shuffle-images/ramen.jpg";
import catImg from "../assets/logo-shuffle-images/cat.jpg";
import { useState } from "react";

interface logoShufflerProps {
	className?: string;
}

const LogoShuffler = ({ className }: logoShufflerProps) => {
	const images = [diamondImg, illeniumImg, mortyImg, ramenImg, catImg];
	const [imageIndex, setImageIndex] = useState(0);

	const styles = twMerge(
		classNames("w-10 aspect-square cursor-pointer", className)
	);

	const changeImage = () => {
		setImageIndex((val) => (val + 1) % images.length);
	};

	return (
		<button className={styles} onClick={changeImage}>
			<img
				className="rounded-md object-contain"
				src={images[imageIndex]}
			/>
		</button>
	);
};

export default LogoShuffler;
