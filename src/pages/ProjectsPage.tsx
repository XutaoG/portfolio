import { useState } from "react";
import Modal from "../components/Reusable/Modal";
import ProjectTile from "../components/Projects/ProjectTile";
import ProjectModalView from "../components/Projects/ProjectModalView";

const ProjectsPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className="w-full flex flex-col gap-2 sm:grid sm:grid-cols-2 xl:grid-cols-3 content-center">
			{/* Modal */}
			<Modal show={showModal} onClose={handleCloseModal}>
				<ProjectModalView />
			</Modal>
			{/* Projects */}
			<ProjectTile />
			<ProjectTile />
			<ProjectTile />
			<ProjectTile />
			<ProjectTile />
			<ProjectTile />
		</div>
	);
};

export default ProjectsPage;
