import ucfKnightLogo from "../../assets/photo-images/ucf-knight-logo.png";

const UniversityPanel = () => {
	return (
		<div className="size-full grow border-4 border-white flex flex-col rounded-md overflow-hidden">
			<div
				className="grow bg-yellow-500 flex items-center gap-4 p-2 py-1
				moderustic tracking-wider text-lg md:text-2xl font-semibold"
			>
				<img src={ucfKnightLogo} className="h-10" />
				UNIVERSITY OF CENTRAL FLORIDA
			</div>
			<div className="grow bg-black" />
		</div>
	);
};

export default UniversityPanel;
