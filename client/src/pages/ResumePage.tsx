import { useState } from "react";
import Modal from "../components/Reusable/Modal";
import ResumeModalView from "../components/Resume/ResumeModalView";
import ResumeInfo from "../components/Resume/ResumeInfo";

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
			md:flex-row md:items-center md:gap-6"
		>
			{/* Modal */}
			<Modal show={showModal} onClose={handleCloseModal}>
				<ResumeModalView />
			</Modal>
			{/* Info */}
			<div className="w-full md:w-2/5 flex flex-col justify-center gap-6">
				<ResumeInfo onViewClick={handleOpenModal} />
			</div>
			{/* PDF */}

			<embed
				className="hidden md:block w-3/5 aspect-[3/4]"
				src="/src/assets/resume/xutao-gao-resume.pdf"
				type="application/pdf"
			/>
		</div>
	);
};

export default ResumePage;
