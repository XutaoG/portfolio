import ucfKnightLogo from "../../assets/photo-images/ucf-knight-logo.png";

const UniversityPanel = () => {
	return (
		<div className="grow border-4 border-white flex flex-col rounded-md">
			<div
				className="grow bg-yellow-500 flex items-center gap-4 p-4
		moderustic tracking-wider text-2xl font-semibold"
			>
				<img src={ucfKnightLogo} className="h-10" />
				UNIVERSITY OF CENTRAL FLORIDA
			</div>
			<div className="grow bg-black"></div>
		</div>
	);
};

export default UniversityPanel;
