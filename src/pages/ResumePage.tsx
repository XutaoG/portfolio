import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ResumeModalView from "../components/ResumeModalView";

const ResumePage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};
	return (
		<div className="flex justify-center items-center gap-8">
			{/* Modal */}
			<Modal show={showModal} onClose={handleCloseModal}>
				<ResumeModalView />
			</Modal>
			{/* Info */}
			<div className="w-96 flex flex-col justify-center gap-6">
				<p className="playfair-display text-5xl leading-snug">
					Experience and Qualitifications
				</p>
				<p className="crimson-text">
					Explore my professional background, skills, and
					achievements. My resume provides a detailed overview of my
					education, experience, expertise, projects, and
					accomplishments.
				</p>
				<p className="crimson-text">
					You can download a PDF version or browse the online version
					to learn more about my qualifications and how I can
					contribute to your team.
				</p>
				<div className="flex gap-4">
					<Button text="/download" textFont="ibm-plex-mono" fill />
					<Button
						text="/view"
						textFont="ibm-plex-mono"
						fill
						onClick={handleOpenModal}
					/>
				</div>
				<p className="ibm-plex-mono self-end">Last Updated: 6/24</p>
			</div>
			{/* PDF */}
			<embed
				className="h-4/5 aspect-[3/4] p-3 rounded-lg border border-neutral-400"
				src="/src/assets/resume/xutao-gao-resume.pdf"
				type="application/pdf"
			/>
		</div>
	);
};

export default ResumePage;
