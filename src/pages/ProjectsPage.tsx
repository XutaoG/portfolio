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
		<div className="flex justify-center gap-2">
			{/* Modal */}
			<Modal show={showModal} onClose={handleCloseModal}>
				<ProjectModalView />
			</Modal>
			{/* Projects */}
			<div className="flex flex-col gap-3" onClick={handleOpenModal}>
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
