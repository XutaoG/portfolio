import PhotoShuffler from "../components/PhotoShuffler";
import SecondaryInfo from "../components/AboutMe/SecondaryInfo";
import PrimaryInfo from "../components/AboutMe/PrimaryInfo";

const AboutMePage = () => {
	return (
		<div className="max-w-[768px] flex flex-col justify-center gap-5">
			<div className="sm:grid sm:grid-cols-2 gap-5">
				{/* Picture */}
				<div className="w-full aspect-square sm:h-full sm:aspect-auto">
					<PhotoShuffler />
				</div>
				{/* Introduction */}
				<PrimaryInfo />
			</div>
			{/* Secondary information */}
			<SecondaryInfo />
		</div>
	);
};

export default AboutMePage;
