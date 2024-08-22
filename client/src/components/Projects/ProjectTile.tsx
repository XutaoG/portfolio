import { useState } from "react";
import { useBreakpointWidthCheck } from "../../hooks";
import { Project } from "../../models/project";

interface projectTileProps {
	project: Project;
	handleOpenModal: (projectToOpen: string) => void;
}

const ProjectTile = ({ project, handleOpenModal }: projectTileProps) => {
	const subheadingBreakpoint = 425;
	const subheadingBreakpointCheck =
		useBreakpointWidthCheck(subheadingBreakpoint);

	const [onHover, setOnHover] = useState(false);

	const onMouseEnter = () => {
		setOnHover(true);
	};

	const onMouseLeave = () => {
		setOnHover(false);
	};

	return (
		<div
			className={`p-1 rounded-lg
			${
				onHover
					? "bg-gradient-to-r from-blue-600/40 to-purple-600/40"
					: "bg-neutral-950"
			}
			hover:scale-[1.02] transition-transform transform-gpu`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => {
				handleOpenModal(project._id);
			}}
		>
			<div className="rounded-md flex flex-col gap-2 cursor-pointer bg-neutral-950 p-3">
				{/* Demo */}
				<div className="aspect-video grow rounded-sm overflow-hidden relative border border-white/20">
					<img src={project.images[0]} />
					<div className="absolute inset-0 bg-black/20" />
				</div>
				{/* Description */}
				<div className="flex flex-col">
					<div className="flex justify-between items-start">
						<div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
							<p
								className={`inter text-xl tracking-wider ${
									onHover
										? "text-transparent font-black"
										: "text-white font-semibold"
								}`}
							>
								{project.title}
							</p>
						</div>
						<div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
							<p
								className={`inter text-xl tracking-wider  ${
									onHover
										? "text-transparent font-black"
										: "text-white font-semibold"
								}`}
							>
								{new Date(project.endDate).getFullYear()}
							</p>
						</div>
					</div>
					{subheadingBreakpointCheck && (
						<p className="moderustic text-white/50 tracking-wider">
							{project.projectType.toUpperCase()}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectTile;
