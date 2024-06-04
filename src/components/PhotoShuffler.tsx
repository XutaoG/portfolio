import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useAppSelector } from "../hooks";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import pic1 from "../assets/photo-images/pic1.jpg";
import pic2 from "../assets/photo-images/pic2.jpg";
import pic3 from "../assets/photo-images/pic3.jpg";
import pic4 from "../assets/photo-images/pic4.jpg";
import { useState } from "react";

const PhotoShuffler = () => {
	const darkMode = useAppSelector((state) => state.system.darkMode);

	const buttonStyle = twMerge(
		classNames("bg-neutral-300 hover:bg-neutral-400", {
			"bg-neutral-500 hover:bg-neutral-600": darkMode,
		})
	);

	const [photoIndex, setPhotoIndex] = useState(0);

	const photos = [pic1, pic2, pic3, pic4];

	// * Navigate photos
	const prevPhoto = () => {
		setPhotoIndex((val) => (val - 1) % photos.length);
	};
	const nextPhoto = () => {
		setPhotoIndex((val) => (val + 1) % photos.length);
	};

	return (
		<div className="w-96 bg-white border border-neutral-400 rounded-lg relative">
			{/* <img
				className="rounded-lg h-full w-full absolute inset-0 object-cover"
				src={photos[photoIndex]}
			/> */}
			{/* Change photo buttons */}
			<div className="absolute inset-0 flex justify-between items-center px-1">
				<button
					className={`flex justify-center items-center p-1 rounded-full ${buttonStyle}`}
					onClick={prevPhoto}
				>
					<MdKeyboardArrowLeft className="text-2xl" />
				</button>
				<button
					className={`flex justify-center items-center p-1 rounded-full ${buttonStyle}`}
					onClick={nextPhoto}
				>
					<MdKeyboardArrowRight className="text-2xl" />
				</button>
			</div>
		</div>
	);
};

export default PhotoShuffler;
