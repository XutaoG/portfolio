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

	return (
		<div
			className={`w-full flex flex-col gap-1 cursor-pointer
			p-3 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800
			hover:scale-[1.03] transition-transform duration-300`}
			onClick={() => {
				handleOpenModal(project._id);
			}}
		>
			{/* Demo */}
			<div className="aspect-video grow rounded-md overflow-hidden border border-neutral-400">
				<img src={project.images[0]} />
			</div>
			{/* Description */}
			<div className="flex flex-col">
				<div className="flex justify-between items-start">
					<p className="poppins font-semibold text-lg">
						{project.title}
					</p>
					<p className="poppins font-semibold text-lg">
						{new Date(project.endDate).getFullYear()}
					</p>
				</div>
				{subheadingBreakpointCheck && (
					<p className="ibm-plex-mono text-neutral-600 dark:text-neutral-400">
						{project.projectType.toUpperCase()}
					</p>
				)}
			</div>
		</div>
	);
};

export default ProjectTile;
