import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import pic1 from "../../assets/photo-images/pic1.jpg";
import pic2 from "../../assets/photo-images/pic2.jpg";
import pic3 from "../../assets/photo-images/pic3.jpg";
import pic4 from "../../assets/photo-images/pic4.jpg";
import { useState } from "react";

const PhotoShuffler = () => {
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
		<div className="size-full bg-white border border-neutral-400 rounded-lg relative">
			{/* <img
				className="rounded-lg h-full w-full absolute inset-0 object-cover"
				src={photos[photoIndex]}
				alt="My photos"
			/> */}
			{/* Change photo buttons */}
			<div className="absolute inset-0 flex justify-between items-center px-1.5">
				<button
					className="flex justify-center items-center p-1 rounded-full
					bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-500 dark:hover:bg-neutral-600
					hover:scale-125 transition-transform duration-300"
					onClick={prevPhoto}
				>
					<MdKeyboardArrowLeft className="text-2xl" />
				</button>
				<button
					className="flex justify-center items-center p-1 rounded-full
					bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-500 dark:hover:bg-neutral-600
					hover:scale-125 transition-transform duration-300"
					onClick={nextPhoto}
				>
					<MdKeyboardArrowRight className="text-2xl" />
				</button>
			</div>
		</div>
	);
};

export default PhotoShuffler;
