import SecondaryInfo from "../components/AboutMe/SecondaryInfo";
import PrimaryInfo from "../components/AboutMe/PrimaryInfo";
// import pfp1BgRemoved from "../assets/photo-images/pfp-1-bg-removed.png";

const AboutMePage = () => {
	return (
		<div className="max-w-[1024px] flex flex-col justify-center gap-4 sm:gap-6 px-3 md:px-4">
			<div className="flex flex-col gap-4 sm:grid md:grid-cols-2 md:gap-6">
				{/* Picture */}
				<img
					className="bg-neutral-950 w-full aspect-square md:h-full md:aspect-auto border-2 border-white object-cover rotate-1"
					src=""
					alt="me"
				/>
				{/* Introduction */}
				<PrimaryInfo />
			</div>
			{/* Secondary information */}
			<SecondaryInfo />
		</div>
	);
};

export default AboutMePage;
