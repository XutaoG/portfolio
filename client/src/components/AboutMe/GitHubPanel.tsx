import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const GitHubPanel = () => {
	const [showGitHubLogo, setShowGitHubLogo] = useState(false);

	const onGitHubHoverEnter = () => {
		setShowGitHubLogo(true);
	};

	const onGitHubHoverLeave = () => {
		setShowGitHubLogo(false);
	};
	return (
		<div
			className="h-full flex flex-col items-center justify-center 
			gap-1 bg-gray-800 rounded-md inter text-white relative hover:cursor-pointer"
			onMouseEnter={onGitHubHoverEnter}
			onMouseLeave={onGitHubHoverLeave}
		>
			<p
				className={`font-light tracking-widest ${
					showGitHubLogo && "-translate-y-4 md:-translate-y-5"
				} transition-transform transform-gpu`}
			>
				GitHub
			</p>
			<p
				className={`text-xl md:text-2xl tracking-wider font-light underline underline-offset-4 ${
					showGitHubLogo && "translate-y-4 md:translate-y-5"
				} transition-transform transform-gpu`}
			>
				Visit
			</p>
			<FaGithub
				className={`absolute text-3xl md:text-4xl opacity-0 ${
					showGitHubLogo && "opacity-100"
				} transition-opacity`}
			/>
		</div>
	);
};

export default GitHubPanel;
