import { useBreakpointWidthCheck } from "../../hooks";
import { project } from "../../modals/project";

interface projectTileProps {
	project: project;
	handleOpenModal: (projectToOpen: project) => void;
}

const ProjectTile = ({ project, handleOpenModal }: projectTileProps) => {
	const subheadingBreakpoint = 425;
	const subheadingBreakpointCheck =
		useBreakpointWidthCheck(subheadingBreakpoint);

	return (
		<div
			className={`aspect-[3/2] sm:aspect-square w-full flex flex-col cursor-pointer
			p-3 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800
			hover:scale-[1.03] transition-transform duration-300`}
			onClick={() => {
				handleOpenModal(project);
			}}
		>
			{/* Demo */}
			<div className="grow border border-neutral-400 bg-white rounded-md"></div>
			{/* Description */}
			<div className="flex justify-between items-start">
				<div>
					<p className="ibm-plex-mono font-semibold">
						{project.title}
					</p>
					{subheadingBreakpointCheck && (
						<p className="ibm-plex-mono text-neutral-600 dark:text-neutral-400">
							{project.projectType}
						</p>
					)}
				</div>
				<p className="anonymous-pro">{project.endDate.getFullYear()}</p>
			</div>
			{/* Action */}
			{/* <div className="flex justify-end gap-3">
				<Button
					text="/view"
					textFont="ibm-plex-mono"
					onClick={() => {
						handleOpenModal(project);
					}}
				/>
				<Button
					text="/code"
					textFont="ibm-plex-mono"
					onClick={() => {
						window.open(project.link, "_blank");
					}}
				/>
			</div> */}
		</div>
	);
};

export default ProjectTile;
