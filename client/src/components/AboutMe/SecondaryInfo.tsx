import LocationPanel from "./LocationPanel";
import GraduationPanel from "./GraduationPanel";
import AgePanel from "./AgePanel";
import UniversityPanel from "./UniversityPanel";
import BackgroundSettingPanel from "./BackgroundSettingPanel";
import EmailPanel from "./EmailPanel";
import GitHubPanel from "./GitHubPanel";
import EnjoyPanel from "./EnjoyPanel";

const SecondaryInfo = () => {
	return (
		<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 auto-rows-fr gap-2 border p-1 sm:p-2">
			<div className="col-span-3 md:col-span-3 lg:col-span-4 h-24 md:h-32 lg:h-36">
				<LocationPanel />
			</div>
			<div className="col-span-2 md:col-span-2 lg:col-span-3">
				<GraduationPanel />
			</div>
			<div className="col-span-1 md:col-span-1 lg:col-span-1">
				<AgePanel />
			</div>
			<div className="col-span-3 md:col-span-4 lg:col-span-4">
				<UniversityPanel />
			</div>
			<div className="col-span-3 md:col-span-3 lg:col-span-2">
				<BackgroundSettingPanel />
			</div>
			<div className="col-span-3 md:col-span-2 lg:col-span-2">
				<EmailPanel />
			</div>
			<div className="col-span-1 md:col-span-1 lg:col-span-1">
				<GitHubPanel />
			</div>
			<div className="col-span-2 md:col-span-4 lg:col-span-4">
				<EnjoyPanel />
			</div>
		</div>
	);
};

export default SecondaryInfo;
