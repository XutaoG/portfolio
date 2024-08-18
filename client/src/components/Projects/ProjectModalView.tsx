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
			<div className="flex flex-col rounded-md overflow-hidden relative">
				<div className="aspect-video">
					<PhotoShuffler photos={project.images} />
				</div>
				<div
					className="flex flex-col gap-1 p-2 absolute left-0 right-0 
					bg-black/80 hover:bg-black/20 text-white hover:text-white/20"
				>
					{/* Title */}
					<p className="poppins font-semibold text-xl tracking-wider">
						{project.title}
					</p>
					{/* Role */}
					<p className="poppins text-sm">Role: {project.role}</p>
				</div>
			</div>
			{/* Action */}
			<Button
				text="/github"
				textFont="ibm-plex-mono"
				fill
				disableHover
				onClick={() => {
					window.open(project.link, "_blank");
				}}
			/>
			{/* Description */}
			<div className="flex flex-col gap-2 bg-neutral-300 dark:bg-neutral-800 rounded-md p-2">
				<p className="inter font-semibold text-center italic">
					Description
				</p>
				<p className="inter leading-6">{project.description}</p>
				{/* Year */}
				<p className="self-end poppins text-sm text-nowrap text-neutral-400">
					{`${new Date(project.startDate).getMonth() + 2}/${new Date(
						project.startDate
					).getFullYear()} -
						${new Date(project.endDate).getMonth() + 2}/${new Date(
						project.endDate
					).getFullYear()}`}
				</p>
			</div>
			{/* Responsibility */}
			{project.responsibility == null || (
				<div className="flex flex-col gap-1">
					<div className="flex gap-4 items-center px-2">
						<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
						<p className="inter font-semibold tracking-wider italic">
							My Responsibility
						</p>
						<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
					</div>
					<p className="inter p-2 leading-6 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md">
						{project.responsibility}
					</p>
				</div>
			)}
			{/* Technologies */}
			<div className="flex flex-col gap-1">
				<div className="flex gap-4 items-center px-2">
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
					<p className="inter font-semibold tracking-wider italic">
						Technologies
					</p>
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
				</div>
				<ul className="list-disc pl-6 list-outside inter">
					{renderedTechnologiesLines}
				</ul>
			</div>
			{/* Features */}
			<div className="flex flex-col gap-1">
				<div className="flex gap-4 items-center px-2">
					<div className="h-[1px] bg-neutral-400 dark:bg-neutral-400 grow" />
					<p className="inter font-semibold tracking-wider italic">
						Features
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
