import { GiArrowCursor } from "react-icons/gi";
import GlowPanel from "../Reusable/GlowPanel";
import { useNavigate } from "react-router-dom";

const NextPagePanel = () => {
	const navigate = useNavigate();

	const goToProjectsPage = () => {
		navigate("/projects");
	};

	return (
		<GlowPanel
			className="grow h-full px-4 flex justify-center items-center gap-2 hover:cursor-pointer"
			onClick={goToProjectsPage}
		>
			<p
				className="text-lg md:text-xl inter text-center text-white tracking-wider 
				hover:tracking-widest transition-[letter-spacing]"
			>
				View My Past Projects
			</p>
			<GiArrowCursor className="text-2xl -rotate-[20deg] animate-bounce" />
		</GlowPanel>
	);
};

export default NextPagePanel;
