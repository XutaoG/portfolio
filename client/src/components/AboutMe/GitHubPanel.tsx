import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import GlowPanel from "../Reusable/GlowPanel";

const GitHubPanel = () => {
	const [onHover, setOnHover] = useState(false);

	const onGitHubHoverEnter = () => {
		setOnHover(true);
	};

	const onGitHubHoverLeave = () => {
		setOnHover(false);
	};

	const openLink = () => {
		window.open("https://github.com/XutaoG", "_blank");
	};

	return (
		<GlowPanel
			className="h-full flex flex-col gap-3 items-center justify-center 
			inter text-white hover:cursor-pointer"
			onMouseEnter={onGitHubHoverEnter}
			onMouseLeave={onGitHubHoverLeave}
			onClick={openLink}
		>
			<div className="absolute inset-16 bg-white/50 blur-2xl" />
			<p
				className={`font-light tracking-widest ${
					onHover && "-translate-y-4"
				} transition-transform transform-gpu`}
			>
				GitHub
			</p>
			<FaGithub
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

export default GitHubPanel;
