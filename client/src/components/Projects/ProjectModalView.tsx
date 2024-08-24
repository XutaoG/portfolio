import axios from "axios";
import { Project } from "../../models/project";
import Button from "../Reusable/Button";
import { useCallback, useEffect, useState } from "react";
import LoadingIndicator from "../Reusable/LoadingIndicator";
import PhotoShuffler from "../Reusable/PhotoShuffler";
import GradientBorderLabel from "../Reusable/GradientBorderLabel";

const apiUrl = import.meta.env.VITE_API_URL;

interface projectModalViewProps {
	projectId: string;
}

const ProjectModalView = ({ projectId }: projectModalViewProps) => {
	const [project, setProject] = useState<Project | null>(null);
	const [isRetrieving, setIsRetrieving] = useState(false);

	const retrieveProjectById = useCallback(async () => {
		setIsRetrieving(true);
		const retrievedProject: Project = (
			await axios.get(`${apiUrl}/project/${projectId}`)
		).data;

		setIsRetrieving(false);
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
					className="py-1 px-2 rounded-md hover:bg-white/5"
				>
					<p>
						<span className="font-semibold tracking-wide">
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
				className="py-1 px-2 rounded-md hover:bg-white/5"
			>
				<p>
					<span className="font-semibold tracking-wide">
						{feature.feature}
					</span>
					: {feature.description}
				</p>
			</li>
		);
	});

	return project === null || isRetrieving ? (
		<LoadingIndicator />
	) : (
		<div className="flex flex-col gap-10">
			{/* Photos */}
			<div
				className="flex flex-col rounded-sm overflow-hidden relative 
				border border-white/20"
			>
				<div className="aspect-video">
					<PhotoShuffler photos={project.images} />
				</div>
				<div
					className="flex flex-col gap-1 p-2 absolute left-0 right-0 
					bg-black/80 hover:bg-black/20 text-white hover:text-white/20"
				>
					{/* Title */}
					<p className="moderustic font-semibold text-2xl tracking-widest">
						{project.title}
					</p>
					{/* Role */}
					<p className="inter text-sm tracking-wider">
						Role: {project.role}
					</p>
				</div>
			</div>
			{/* Action */}
			<div className="self-center">
				<Button
					text="View GitHub Repository"
					disableHover
					rounded
					onClick={() => {
						window.open(project.link, "_blank");
					}}
				/>
			</div>
			{/* Description */}
			<div className="flex flex-col gap-2 bg-white/5 rounded-md p-2">
				<p className="moderustic font-semibold tracking-widest text-center">
					DESCRIPTION
				</p>
				<p className="inter leading-6 tracking-wide">
					{project.description}
				</p>
				{/* Year */}
				<p className="self-end inter tracking-wide text-sm text-nowrap text-neutral-400">
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
					<div className="self-center">
						<GradientBorderLabel text="MY RESPONSIBILITIES" />
					</div>
					<p className="inter p-2 leading-6 tracking-wide hover:bg-white/5 rounded-md">
						{project.responsibility}
					</p>
				</div>
			)}
			{/* Technologies */}
			<div className="flex flex-col gap-1">
				<div className="self-center">
					<GradientBorderLabel text="TECHNOLOGIES USED" />
				</div>
				<ul className="list-disc pl-6 list-outside inter">
					{renderedTechnologiesLines}
				</ul>
			</div>
			{/* Features */}
			<div className="flex flex-col gap-1">
				<div className="self-center">
					<GradientBorderLabel text="NOTABLE FEATURES" />
				</div>
				<ul className="list-disc pl-6 list-outside inter">
					{renderedFeatureLines}
				</ul>
			</div>
		</div>
	);
};

export default ProjectModalView;
