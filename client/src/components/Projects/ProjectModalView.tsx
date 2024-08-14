import { project } from "../../modals/project";
import Button from "../Reusable/Button";

interface projectModalViewProps {
	project: project;
}

const ProjectModalView = ({ project }: projectModalViewProps) => {
	return (
		<div className="flex flex-col gap-4 bg-white dark:bg-neutral-700">
			{/* Photos */}
			<div className="h-96 flex border border-neutral-400 rounded-md p-2">
				<div className="self-start gap-4">
					{/* Title */}
					<p className="poppins font-semibold text-xl tracking-wider">
						{project.title}
					</p>
					{/* Role */}
					<p className="ibm-plex-mono font-medium text-sm">
						Role: {project.role}
					</p>
				</div>
			</div>
			<div className="flex justify-between items-end bg-neutral-800 rounded-md p-2">
				<div className="flex flex-col gap-1">
					{/* Year */}
					<p className="anonymous-pro">
						{`${project.startDate.getMonth()}/${project.startDate.getFullYear()} -
						${project.endDate.getMonth()}/${project.endDate.getFullYear()}`}
					</p>
					{/* Project Type */}
					<p className="ibm-plex-mono text-neutral-600 dark:text-neutral-400">
						{project.projectType.toUpperCase()}
					</p>
				</div>
				{/* Action */}
				<Button
					text="/github"
					textFont="ibm-plex-mono"
					onClick={() => {
						window.open(project.link, "_blank");
					}}
				/>
			</div>
			{/* Description */}
			<div className="flex flex-col gap-1">
				<p className="poppins font-semibold tracking-wider">
					DESCRIPTION
				</p>
				<p className="crimson-text pl-4">{project.description}</p>
			</div>
			{/* Technologies */}
			<div className="flex flex-col gap-1">
				<p className="poppins font-semibold tracking-wider">
					TECHNOLOGIES
				</p>
				<ul className="list-disc pl-4 list-outside crimson-text">
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Magnam, soluta.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium illum praesentium necessitatibus! Laboriosam
						voluptatum eaque eius, incidunt nihil ipsum cumque!.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Pariatur nemo corrupti minus commodi!
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectModalView;
