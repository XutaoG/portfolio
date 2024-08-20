import ScalingText from "../Reusable/ScalingText";

const PrimaryInfo = () => {
	return (
		<div className="flex flex-col gap-10 items-center">
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
			<div className="relative">
				<div className="absolute inset-0 bg-black/80 blur-lg -z-50" />
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
			</div>
		</div>
	);
};

export default PrimaryInfo;
