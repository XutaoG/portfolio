import SecondaryInfo from "../components/AboutMe/SecondaryInfo";
import PrimaryInfo from "../components/AboutMe/PrimaryInfo";

const AboutMePage = () => {
	return (
		<div className="size-full flex flex-col justify-center items-center gap-4 sm:gap-12 lg:gap-24">
			<div className="max-w-[1024px] container mx-auto flex flex-col gap-4 sm:grid md:grid-cols-2 md:gap-6 lg:gap-12">
				<img
					className="bg-neutral-950 w-full aspect-square md:h-full md:aspect-auto border-2 border-white object-cover rotate-1"
					src=""
					alt="me"
				/>
				<PrimaryInfo />
			</div>
			<SecondaryInfo />
		</div>
	);
};

export default AboutMePage;
