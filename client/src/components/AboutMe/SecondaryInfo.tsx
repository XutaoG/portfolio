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
		<div className="flex flex-col gap-2">
			<div className="flex gap-2 h-36">
				<LocationPanel />
				<GraduationPanel />
			</div>
			<div className="flex gap-2 h-36">
				<AgePanel />
				<UniversityPanel />
				<BackgroundSettingPanel />
			</div>
			<div className="flex gap-2 h-36">
				<EmailPanel />
				<GitHubPanel />
				<EnjoyPanel />
			</div>
		</div>
	);
};

export default SecondaryInfo;
