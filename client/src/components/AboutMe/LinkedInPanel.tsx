import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import GlowPanel from "../Reusable/GlowPanel";

const LinkedInPanel = () => {
	const [onHover, setOnHover] = useState(false);

	const onMouseEnter = () => {
		setOnHover(true);
	};

	const onMouseLeave = () => {
		setOnHover(false);
	};

	const openLink = () => {
		window.open(
			"https://www.linkedin.com/in/xutao-gao-2a7346250/",
			"_blank"
		);
	};

	return (
		<GlowPanel
			className="h-full flex flex-col items-center justify-center 
			gap-1 inter text-white hover:cursor-pointer"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={openLink}
		>
			<div className="absolute inset-16 bg-blue-600 blur-2xl" />
			<p
				className={`font-light tracking-widest ${
					onHover && "-translate-y-4"
				} transition-transform transform-gpu`}
			>
				LinkedIn
			</p>
			<FaLinkedin
				className={`text-2xl lg:text-3xl xl:text-5xl opacity-100 ${
					onHover && "scale-125 -translate-y-4"
				} transition-transform transform-gpu`}
			/>
			<p
				className={`absolute bottom-2 md:bottom-4 text-sm tracking-wide opacity-0
					${onHover && "opacity-100"} transition-opacity`}
			>
				(Visit)
			</p>
		</GlowPanel>
	);
};

export default LinkedInPanel;
