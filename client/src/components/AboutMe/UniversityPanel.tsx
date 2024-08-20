import { useState } from "react";
import ucfKnightLogo from "../../assets/photo-images/ucf-knight-logo.png";
import GlowPanel from "../Reusable/GlowPanel";

const UniversityPanel = () => {
	const [onHover, setOnHover] = useState(false);

	const onMouseEnter = () => {
		setOnHover(true);
	};

	const onMouseLeave = () => {
		setOnHover(false);
	};

	return (
		<GlowPanel
			className="size-full grow p-2 flex justify-center items-center cursor-default"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="relative">
				<div
					className={`absolute inset-0 blur-2xl md:blur-3xl 
					${
						onHover
							? "opacity-100 bg-yellow-500"
							: "opacity-50 bg-yellow-400 "
					} transition-opacity duration-500`}
				/>
				<div
					className={`flex justify-center items-center gap-2
					${
						onHover ? "scale-110" : "scale-100"
					} transition-transform duration-500 transform-gpu`}
				>
					<img src={ucfKnightLogo} className="h-10 z-10" />
					<p className="moderustic tracking-wider text-lg md:text-2xl font-semibold z-10">
						UNIVERSITY OF CENTRAL FLORIDA
					</p>
				</div>
			</div>
		</GlowPanel>
	);
};

export default UniversityPanel;
