import { twMerge } from "tailwind-merge";
import Button from "./Button";
import classNames from "classnames";

interface projectTileProps {
	size: number;
}

const ProjectTile = ({ size }: projectTileProps) => {
	const height = twMerge(
		classNames({
			"h-[500px]": size === 1,
			"h-[600px]": size === 2,
			"h-[700px]": size === 3,
		})
	);

	return (
		<div
			className={`${height} flex flex-col min-w-[450px] max-w-[550px] cursor-pointer
			p-3 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800
			hover:scale-[1.03] transition-transform duration-300`}
		>
			{/* Demo */}
			<div className="grow border border-neutral-400 bg-white"></div>
			{/* Description */}
			<div className="flex justify-between items-start">
				<div>
					<p className="ibm-plex-mono font-semibold">PORTFOLIO</p>
					<p className="ibm-plex-mono text-neutral-600 dark:text-neutral-400">
						FULL STACK APPLICATION
					</p>
				</div>
				<p className="anonymous-pro">2024</p>
			</div>
			{/* Action */}
			<div className="flex justify-end gap-3">
				<Button text="/view" textFont="ibm-plex-mono" />
				<Button text="/code" textFont="ibm-plex-mono" />
			</div>
		</div>
	);
};

export default ProjectTile;
