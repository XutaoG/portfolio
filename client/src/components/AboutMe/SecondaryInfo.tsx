import LocationPanel from "./LocationPanel";
import GraduationPanel from "./GraduationPanel";
import AgePanel from "./AgePanel";
import UniversityPanel from "./UniversityPanel";
import EmailPanel from "./EmailPanel";
import GitHubPanel from "./GitHubPanel";
import LinkedInPanel from "./LinkedInPanel";
import NextPagePanel from "./NextPagePanel";
import PhoneNumberPanel from "./PhoneNumberPanel";

const SecondaryInfo = () => {
	return (
		<div className="max-w-[2160px] w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 auto-rows-fr gap-3 md:gap-5">
			<div className="col-span-3 md:col-span-3 lg:col-span-4 h-24 md:h-32 lg:h-40 xl:h-48 2xl:h-64">
				<LocationPanel />
			</div>
			<div className="col-span-2 md:col-span-2 lg:col-span-3">
				<GraduationPanel />
			</div>
			<div className="col-span-1 md:col-span-1 lg:col-span-1">
				<AgePanel />
			</div>
			<div className="col-span-3 md:col-span-4 lg:col-span-5">
				<UniversityPanel />
			</div>
			<div className="col-span-1 md:col-span-3 lg:col-span-1">
				<LinkedInPanel />
			</div>
			<div className="col-span-2 md:col-span-2 lg:col-span-2">
				<PhoneNumberPanel />
			</div>
			<div className="col-span-2 md:col-span-2 lg:col-span-2">
				<EmailPanel />
			</div>
			<div className="col-span-1 md:col-span-1 lg:col-span-1">
				<GitHubPanel />
			</div>
			<div className="col-span-3 md:col-span-2 lg:col-span-2">
				<NextPagePanel />
			</div>
		</div>
	);
};

export default SecondaryInfo;
