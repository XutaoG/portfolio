import { Fragment } from "react/jsx-runtime";
import Button from "../Reusable/Button";

interface resumeInfoProps {
	onViewClick: () => void;
}

const ResumeInfo = ({ onViewClick }: resumeInfoProps) => {
	return (
		<Fragment>
			<p className="playfair-display text-4xl leading-snug">
				Experience and Qualitifications
			</p>
			<p className="crimson-text">
				Explore my professional background, skills, and achievements. My
				resume provides a detailed overview of my education, experience,
				expertise, projects, and accomplishments.
			</p>
			<p className="crimson-text">
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
		</Fragment>
	);
};

export default ResumeInfo;
