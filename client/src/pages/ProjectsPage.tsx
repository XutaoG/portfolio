import { useCallback, useEffect, useState } from "react";
import Modal from "../components/Reusable/Modal";
import ProjectTile from "../components/Projects/ProjectTile";
import ProjectModalView from "../components/Projects/ProjectModalView";
import { Project } from "../models/project";

import axios from "axios";
import LoadingIndicator from "../components/Reusable/LoadingIndicator";

const ProjectsPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [openedProjectId, setOpenedProjectId] = useState<string | null>(null);

	const handleOpenModal = (projectToOpen: string) => {
		setShowModal(true);
		setOpenedProjectId(projectToOpen);
	};

	const [projects, setProjects] = useState<Project[] | null>(null);

	const retrieveAllProjects = useCallback(async () => {
		const retrievedProjects: Project[] = (
			await axios.get("http://localhost:4000/project")
		).data;

		setProjects(retrievedProjects);
	}, []);

	useEffect(() => {
		retrieveAllProjects();
	}, [retrieveAllProjects]);

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const renderedProjectTiles = projects?.map((project, index) => {
		return (
			<ProjectTile
				key={index}
				project={project}
				handleOpenModal={handleOpenModal}
			/>
		);
	});

	return projects === null ? (
		<LoadingIndicator />
	) : (
		<div className="w-full flex flex-col gap-2 sm:grid sm:grid-cols-2 xl:grid-cols-3 content-center">
			{/* Modal */}
			<Modal show={showModal} onClose={handleCloseModal}>
				{openedProjectId == null || (
					<ProjectModalView projectId={openedProjectId!} />
				)}
			</Modal>
			{/* Projects */}
			{renderedProjectTiles}
		</div>
	);
};

export default ProjectsPage;
