import ProjectTile from "../components/ProjectTile";

const ProjectsPage = () => {
	return (
		<div className="flex justify-center gap-2">
			<div className="flex flex-col gap-3">
				<ProjectTile size={1} />
				<ProjectTile size={2} />
			</div>
			<div className="flex flex-col gap-3">
				<ProjectTile size={3} />
				<ProjectTile size={1} />
			</div>
			<div className="flex flex-col gap-3">
				<ProjectTile size={2} />
				<ProjectTile size={1} />
			</div>
		</div>
	);
};

export default ProjectsPage;
