import Button from "../Reusable/Button";

interface resumeInfoProps {
	onViewClick: () => void;
}

const ResumeInfo = ({ onViewClick }: resumeInfoProps) => {
	return (
		<div className="w-full md:w-2/5 flex flex-col justify-center gap-6">
			<p
				className="architects-daughter-regular text-2xl self-end border border-white px-2 
				rotate-3 hover:-rotate-3 transition-transform transform-gpu"
			>
				View My Resume
			</p>
			<p className="moderustic tracking-widest font-bold text-4xl leading-snug">
				Experience and Qualitifications
			</p>
			<p className="crimson-pro tracking-wide md:text-lg">
				Explore my professional background, skills, and achievements. My
				resume provides a detailed overview of my education, experience,
				expertise, projects, and accomplishments.
			</p>
			<p className="crimson-pro tracking-wide md:text-lg">
				You can download a PDF version or browse the online version to
				learn more about my qualifications and how I can contribute to
				your team.
			</p>
			<div className="flex gap-4">
				<Button text="/download" textFont="ibm-plex-mono" fill />
				<Button
					text="/view"
					textFont="ibm-plex-mono"
					fill
					onClick={onViewClick}
				/>
			</div>
			<p className="ibm-plex-mono self-end">Last Updated: 6/24</p>
		</div>
	);
};

export default ResumeInfo;
