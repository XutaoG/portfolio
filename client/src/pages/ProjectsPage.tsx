import { useState } from "react";
import Modal from "../components/Reusable/Modal";
import ProjectTile from "../components/Projects/ProjectTile";
import ProjectModalView from "../components/Projects/ProjectModalView";
import { project, projects } from "../modals/project";

const ProjectsPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [openedProject, setOpenedProject] = useState(projects[0]);

	const handleOpenModal = (projectToOpen: project) => {
		setShowModal(true);
		setOpenedProject(projectToOpen);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const renderedProjectTiles = projects.map((project, index) => {
		return (
			<ProjectTile
				key={index}
				project={project}
				handleOpenModal={handleOpenModal}
			/>
		);
	});

	return (
		<div className="w-full flex flex-col gap-2 sm:grid sm:grid-cols-2 xl:grid-cols-3 content-center">
			{/* Modal */}
			<Modal show={showModal} onClose={handleCloseModal}>
				<ProjectModalView project={openedProject} />
			</Modal>
			{/* Projects */}
			{renderedProjectTiles}
		</div>
	);
};

export default ProjectsPage;
