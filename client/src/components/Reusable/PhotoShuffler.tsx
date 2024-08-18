import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import pic1 from "../../assets/photo-images/pic1.jpg";
// import pic2 from "../../assets/photo-images/pic2.jpg";
// import pic3 from "../../assets/photo-images/pic3.jpg";
// import pic4 from "../../assets/photo-images/pic4.jpg";
// import pic5 from "../../assets/photo-images/pic5.jpg";
import { useEffect, useState } from "react";

interface PhotoShufferProps {
	photos: string[];
}

const PhotoShuffler = ({ photos }: PhotoShufferProps) => {
	const [photoIndex, setPhotoIndex] = useState(0);

	useEffect(() => {
		setPhotoIndex(0);
	}, [photos]);

	// * Navigate photos
	const prevPhoto = () => {
		setPhotoIndex((val) => {
			if (val === 0) {
				return photos.length - 1;
			}
			return val - 1;
		});
	};
	const nextPhoto = () => {
		setPhotoIndex((val) => (val + 1) % photos.length);
	};

	return (
		<div className="size-full relative">
			{photos.length === 0 || (
				<img
					className="h-full w-full absolute inset-0 object-cover"
					src={photos[photoIndex]}
					alt="My photos"
				/>
			)}
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
			{/* Show photo index */}
			<div
				className="absolute bottom-2 right-2 px-2
				bg-neutral-300 dark:bg-neutral-500 rounded-md"
			>
				<p className="inter font-semibold">{`${photoIndex + 1}/${
					photos.length
				}`}</p>
			</div>
		</div>
	);
};

export default PhotoShuffler;
