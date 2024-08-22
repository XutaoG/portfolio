import { Fragment } from "react/jsx-runtime";
import DarkenedPanel from "../Reusable/DarkenedPanel";
import ScalingText from "../Reusable/ScalingText";

const ProjectOverviewText = () => {
	return (
		<Fragment>
			{/* Title */}
			<DarkenedPanel>
				<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1">
					<div className="size-full bg-neutral-950 rounded-3xl p-4">
						<ScalingText
							text="PROJECTS"
							textStyle="moderustic font-bold text-5xl sm:text-7xl"
						/>
					</div>
				</div>
			</DarkenedPanel>
			{/* Information */}
			<DarkenedPanel className="max-w-[640px] flex flex-col gap-4">
				<p
					className={`text-lg  inter tracking-wide leading-7 font-light`}
				>
					Explore a collection of my projects, where I apply my skills
					to build practical and innovative solutions. Each project
					showcases my dedication to coding, problem-solving, and
					continuous learning.
				</p>
				<p
					className={`text-lg inter tracking-wide leading-7 font-light`}
				>
					Click on each project to view more details.
				</p>
			</DarkenedPanel>
		</Fragment>
	);
};

export default ProjectOverviewText;
