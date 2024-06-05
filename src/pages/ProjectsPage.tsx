import ProjectTile from "../components/ProjectTile";

const ProjectsPage = () => {
	return (
		<div className="flex justify-center gap-2">
			<div className="flex flex-col gap-3">
				<ProjectTile height={500} />
				<ProjectTile height={600} />
			</div>
			<div className="flex flex-col gap-3">
				<ProjectTile height={700} />
				<ProjectTile height={500} />
			</div>
			<div className="flex flex-col gap-3">
				<ProjectTile height={600} />
				<ProjectTile height={500} />
			</div>
		</div>
	);
};

export default ProjectsPage;
