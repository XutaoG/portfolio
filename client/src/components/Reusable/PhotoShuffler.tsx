import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import pic1 from "../../assets/photo-images/pic1.jpg";
// import pic2 from "../../assets/photo-images/pic2.jpg";
// import pic3 from "../../assets/photo-images/pic3.jpg";
// import pic4 from "../../assets/photo-images/pic4.jpg";
// import pic5 from "../../assets/photo-images/pic5.jpg";
import { useEffect, useRef, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";

interface PhotoShufferProps {
	photos: string[];
}

const PhotoShuffler = ({ photos }: PhotoShufferProps) => {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isImageLoading, setIsImageLoading] = useState(false);
	const imageRef = useRef<HTMLImageElement>(null);

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

	useEffect(() => {
		if (!imageRef.current) {
			return;
		}

		const IsImageLoading = (img: HTMLImageElement) => {
			if (!img.complete || img.naturalWidth === 0) {
				return true;
			}

			return false;
		};

		const interval = setInterval(() => {
			if (IsImageLoading(imageRef.current!)) {
				setIsImageLoading(true);
			} else {
				setIsImageLoading(false);
			}
		}, 200);

		return () => clearInterval(interval);
	}, [photoIndex]);

	// const onImageLoadingStart = () => {
	// 	setIsImageLoading(true);
	// };

	// const onImageLoadingEnd = () => {
	// 	setIsImageLoading(false);
	// };

	return (
		<div className="size-full relative">
			{/* Images */}
			{photos.length !== 0 && (
				<img
					ref={imageRef}
					className={`size-full absolute inset-0 object-cover ${
						isImageLoading ? "hidden" : "block"
					}`}
					src={photos[photoIndex]}
					alt="My photos"
					// onLoadStart={onImageLoadingStart}
					// onLoad={onImageLoadingEnd}
				/>
			)}
			{isImageLoading && (
				<div className="z-50 size-full flex justify-center items-center">
					<LoadingIndicator />
				</div>
			)}
			{/* Change photo buttons */}
			<div className="absolute inset-0 flex justify-between items-center px-1.5">
				<button
					className="flex justify-center items-center p-1 rounded-full
					bg-black/60 hover:scale-125 transition-transform duration-300"
					onClick={prevPhoto}
				>
					<MdKeyboardArrowLeft className="text-2xl" />
				</button>
				<button
					className="flex justify-center items-center p-1 rounded-full
					bg-black/60 hover:scale-125 transition-transform duration-300"
					onClick={nextPhoto}
				>
					<MdKeyboardArrowRight className="text-2xl" />
				</button>
			</div>
			{/* Show photo index */}
			<div className="absolute bottom-2 right-2 px-2 bg-black/60 rounded-md">
				<p className="inter font-medium tracking-widest">{`${
					photoIndex + 1
				}/${photos.length}`}</p>
			</div>
		</div>
	);
};

export default PhotoShuffler;
