import { useState } from "react";
import GlowPanel from "../Reusable/GlowPanel";

const AgePanel = () => {
	const [onHover, setOnHover] = useState(false);

	const onMouseEnter = () => {
		setOnHover(true);
	};

	const onMouseLeave = () => {
		setOnHover(false);
	};

	return (
		<GlowPanel
			className="size-full flex flex-col items-center justify-center gap-1
			inter text-white cursor-default"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<p className="font-light tracking-widest">Age</p>
			<div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
				<p
					className={`text-2xl md:text-4xl w-full inset-x-0 text-center ${
						onHover
							? "text-transparent font-semibold"
							: "text-white"
					}`}
				>
					20
				</p>
			</div>
			<p className="font-light text-sm tracking-widest">Years Old</p>
		</GlowPanel>
	);
};

export default AgePanel;
