import SecondaryInfo from "../components/AboutMe/SecondaryInfo";
import PrimaryInfo from "../components/AboutMe/PrimaryInfo";
import pfp1BgRemoved from "../assets/photo-images/pfp-1-bg-removed.png";
import { useChangePageByScroll } from "../hooks";

const AboutMePage = () => {
	useChangePageByScroll(null, "/projects");

	return (
		<div className="max-w-[1024px] flex flex-col justify-center gap-4 sm:gap-6">
			<div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6">
				{/* Picture */}
				<img
					className="bg-neutral-950 w-full aspect-square sm:h-full sm:aspect-auto border-2 border-white"
					src={pfp1BgRemoved}
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
