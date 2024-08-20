import SecondaryInfo from "../components/AboutMe/SecondaryInfo";
import PrimaryInfo from "../components/AboutMe/PrimaryInfo";
// import AboutMePhotos from "../components/AboutMe/AboutMePhotos";

const AboutMePage = () => {
	return (
		<div className="size-full flex flex-col justify-end items-center gap-4 sm:gap-12 lg:gap-24 pb-4">
			{/* <div className="container mx-auto flex flex-col gap-4 sm:grid md:grid-cols-2 md:gap-6 lg:gap-12"> */}
			{/* <AboutMePhotos /> */}
			{/* </div> */}
			<div className="container mx-auto">
				<PrimaryInfo />
			</div>
			<SecondaryInfo />
		</div>
	);
};

export default AboutMePage;
