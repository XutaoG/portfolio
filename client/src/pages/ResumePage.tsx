import { useState } from "react";
import Modal from "../components/Reusable/Modal";
import ResumeModalView from "../components/Resume/ResumeModalView";
import ResumeInfo from "../components/Resume/ResumeInfo";
import ResumeDisplay from "../components/Resume/ResumeDisplay";

const ResumePage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};
	return (
		<div
			className="max-w-[1280px] flex flex-col justify-center gap-2 
			md:flex-row md:items-center md:gap-6 pb-4"
		>
			{/* Modal */}
			<Modal show={showModal} onClose={handleCloseModal}>
				<ResumeModalView />
			</Modal>
			{/* Info */}
			<ResumeInfo onViewClick={handleOpenModal} />
			{/* PDF */}
			<div className="hidden lg:block w-3/5">
				<ResumeDisplay />
			</div>
		</div>
	);
};

export default ResumePage;
