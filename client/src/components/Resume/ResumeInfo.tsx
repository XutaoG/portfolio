import { GiArrowCursor } from "react-icons/gi";
import Button from "../Reusable/Button";
import DarkenedPanel from "../Reusable/DarkenedPanel";
import GlowButton from "../Reusable/GlowButton";
import ScalingText from "../Reusable/ScalingText";
import { useNavigate } from "react-router-dom";
import resume from "../../assets/resume/xutao-gao-resume.pdf";

interface resumeInfoProps {
	onViewClick: () => void;
}

const ResumeInfo = ({ onViewClick }: resumeInfoProps) => {
	const navigate = useNavigate();

	const goToContact = () => {
		navigate("/contact");
	};

	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "Xutao Gao Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="w-full lg:w-2/5 flex flex-col justify-center gap-12">
			<DarkenedPanel className="flex flex-col gap-4 items-center">
				<ScalingText
					text="EXPERIENCE"
					textStyle="moderustic font-bold text-4xl sm:text-6xl"
				/>
				<ScalingText
					text="&"
					textStyle="moderustic font-bold text-4xl sm:text-6xl"
				/>
				<ScalingText
					text="EXPERTISE"
					textStyle="moderustic font-bold text-4xl sm:text-6xl"
				/>
			</DarkenedPanel>
			<DarkenedPanel className="flex flex-col gap-4 text-lg inter tracking-wide leading-7 font-light">
				<p>
					Explore my professional background, skills, and
					achievements. My resume provides a detailed overview of my
					education, experience, expertise, projects, and
					accomplishments.
				</p>
				<p>
					You can download a PDF version or browse the online version
					to learn more about my qualifications and how I can
					contribute to your team.
				</p>
				<div className="flex gap-4">
					{/* <a
						href={resume}
						download="Xutao Gao Resume"
						target="_blank"
					> */}
					<Button text="Download" onClick={downloadResume} fill />
					{/* </a> */}
					<Button text="View" onClick={onViewClick} fill />
				</div>
				{/* <p className="ibm-plex-mono self-end">Last Updated: 6/24</p> */}
			</DarkenedPanel>
			<DarkenedPanel className="flex flex-col gap-4">
				<p className="self-center text-lg inter tracking-wider leading-7 font-light">
					Interested? Let's get in touch!
				</p>
				<div className="self-center">
					<GlowButton onClick={goToContact}>
						<p className="inter tracking-widest text-lg sm:text-xl font-light">
							Contact Me
						</p>
						<GiArrowCursor className="text-xl -rotate-[20deg] animate-bounce" />
					</GlowButton>
				</div>
			</DarkenedPanel>
		</div>
	);
};

export default ResumeInfo;
