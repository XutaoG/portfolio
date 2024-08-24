import { useCallback, useEffect, useState } from "react";
import Modal from "../components/Reusable/Modal";
import ProjectTile from "../components/Projects/ProjectTile";
import ProjectModalView from "../components/Projects/ProjectModalView";
import { Project } from "../models/project";

import axios from "axios";
import LoadingIndicator from "../components/Reusable/LoadingIndicator";
import DarkenedPanel from "../components/Reusable/DarkenedPanel";
import { GiArrowCursor } from "react-icons/gi";
import ProjectOverviewText from "../components/Projects/ProjectOverviewText";
import { useNavigate } from "react-router-dom";
import GlowButton from "../components/Reusable/GlowButton";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

const ProjectsPage = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [openedProjectId, setOpenedProjectId] = useState<string | null>(null);

	const handleOpenModal = (projectToOpen: string) => {
		setShowModal(true);
		setOpenedProjectId(projectToOpen);
	};

	const [projects, setProjects] = useState<Project[] | null>(null);

	const retrieveAllProjects = useCallback(async () => {
		const retrievedProjects: Project[] = (
			await axios.get(`${apiUrl}/project`)
		).data;

		setProjects(retrievedProjects);
	}, []);

	useEffect(() => {
		retrieveAllProjects();
	}, [retrieveAllProjects]);

	const goToResumePage = () => {
		navigate("/resume");
	};

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
		<div className="container flex flex-col items-center gap-10 pb-4">
			<ProjectOverviewText />
			{/* Projects */}
			<div className="w-full flex flex-col gap-2 lg:gap-4 sm:grid lg:grid-cols-2 2xl:grid-cols-3 bg-neutral-950">
				{/* Modal */}
				<Modal show={showModal} onClose={handleCloseModal}>
					{openedProjectId == null || (
						<ProjectModalView projectId={openedProjectId!} />
					)}
				</Modal>
				{renderedProjectTiles}
			</div>
			{/* Transition to Resume */}
			<div className="flex flex-col gap-8 items-center">
				<DarkenedPanel className="flex flex-col gap-4">
					<p
						className={`text-lg inter tracking-wider leading-7 font-light`}
					>
						See what I've been up to?
					</p>
				</DarkenedPanel>
				<GlowButton onClick={goToResumePage}>
					<p className="inter tracking-widest text-lg sm:text-xl font-light">
						Check Out My Resume
					</p>
					<GiArrowCursor className="text-xl -rotate-[20deg] animate-bounce" />
				</GlowButton>
			</div>
		</div>
	);
};

export default ProjectsPage;
