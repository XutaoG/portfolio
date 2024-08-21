import DarkenedPanel from "../Reusable/DarkenedPanel";
import ScalingText from "../Reusable/ScalingText";

const PrimaryInfo = () => {
	return (
		<div className="flex flex-col gap-10 items-center">
			<DarkenedPanel>
				<div className="flex justify-center gap-x-10 gap-y-4 flex-wrap">
					<ScalingText
						text="ABOUT"
						textStyle="moderustic font-bold text-5xl sm:text-7xl"
					/>
					<ScalingText
						text="ME"
						textStyle="moderustic font-bold text-5xl sm:text-7xl"
					/>
				</div>
			</DarkenedPanel>
			<DarkenedPanel>
				<p
					className={`text-lg max-w-[640px] inter tracking-wide leading-7 font-light`}
				>
					I'm a passionate Computer Science student at the University
					of Central Florida, driven by a love for coding and
					problem-solving. With a solid academic foundation and
					hands-on experience in software engineering, I specialize in
					creating intuitive, high-performance applications. I enjoy
					leading projects that bring innovative ideas to life, and
					I'm committed to continuous learning and personal growth.
				</p>
			</DarkenedPanel>
		</div>
	);
};

export default PrimaryInfo;
