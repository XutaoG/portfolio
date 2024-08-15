import axios from "axios";
import { Project } from "../../models/project";
import Button from "../Reusable/Button";
import { useCallback, useEffect, useState } from "react";
import LoadingIndicator from "../Reusable/LoadingIndicator";
import PhotoShuffler from "../Reusable/PhotoShuffler";

interface projectModalViewProps {
	projectId: string;
}

const ProjectModalView = ({ projectId }: projectModalViewProps) => {
	const [project, setProject] = useState<Project | null>(null);

	const retrieveProjectById = useCallback(async () => {
		const retrievedProject: Project = (
			await axios.get(`http://localhost:4000/project/${projectId}`)
		).data;

		setProject(retrievedProject);
	}, [projectId]);

	useEffect(() => {
		retrieveProjectById();
	}, [retrieveProjectById]);

	const renderedTechnologiesLines = project?.technologies.map(
		(technology) => {
			return (
				<li
					key={technology.technology}
					className="py-1 px-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600"
				>
					<p>
						<span className="font-semibold">
							{technology.technology}
						</span>
						: {technology.description}
					</p>
				</li>
			);
		}
	);

	const renderedFeatureLines = project?.features.map((feature) => {
		return (
			<li
				key={feature.feature}
				className="py-1 px-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600"
			>
				<p>
					<span className="font-semibold">{feature.feature}</span>:{" "}
					{feature.description}
				</p>
			</li>
		);
	});

	return project === null ? (
		<LoadingIndicator />
	) : (
		<div className="flex flex-col gap-8 bg-white dark:bg-neutral-700">
			{/* Photos */}
			<div className="flex flex-col border border-neutral-400 rounded-md overflow-hidden relative">
				<div className="aspect-video">
					<PhotoShuffler photos={project.images} />
				</div>
				<div className="flex flex-col gap-1 p-2 absolute left-0 right-0 bg-black/80 rounded-br-lg text-white">
					{/* Title */}
					<p className="poppins font-semibold text-xl tracking-wider">
						{project.title}
					</p>
					{/* Role */}
					<p className="poppins text-sm">Role: {project.role}</p>
				</div>
			</div>
			<div className="flex justify-between items-end bg-neutral-200 dark:bg-neutral-800 rounded-md p-2">
				<div className="flex flex-col gap-1">
					{/* Year */}
					<p className="poppins font-semibold">
						{`${new Date(project.startDate).getMonth()}/${new Date(
							project.startDate
						).getFullYear()} -
					${new Date(project.endDate).getMonth()}/${new Date(
							project.endDate
						).getFullYear()}`}
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
				<div className="flex gap-4 items-center">
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
					<p className="inter font-semibold tracking-wider text-lg">
						DESCRIPTION
					</p>
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
				</div>
				<p className="inter p-2 leading-6 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md">
					{project.description}
				</p>
			</div>
			{/* Technologies */}
			<div className="flex flex-col gap-1">
				<div className="flex gap-4 items-center">
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
					<p className="inter font-semibold tracking-wider text-lg">
						TECHNOLOGIES
					</p>
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
				</div>
				<ul className="list-disc pl-6 list-outside inter">
					{renderedTechnologiesLines}
				</ul>
			</div>
			{/* Features */}
			<div className="flex flex-col gap-1">
				<div className="flex gap-4 items-center">
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
					<p className="inter font-semibold tracking-wider text-lg">
						FEATURES
					</p>
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
				</div>
				<ul className="list-disc pl-6 list-outside inter">
					{renderedFeatureLines}
				</ul>
			</div>
		</div>
	);
};

export default ProjectModalView;
