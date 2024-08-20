import { useNavigate } from "react-router-dom";
import { GiArrowCursor } from "react-icons/gi";
import ScalingText from "../Reusable/ScalingText";

const Introduction = () => {
	const navigate = useNavigate();

	const goToAboutMePage = () => {
		navigate("/about");
	};

	return (
		<div className="flex flex-col max-w-[1440px] w-full items-center gap-16 sm:gap-24">
			<div className="flex flex-col gap-8 relative">
				<div className="absolute inset-0 bg-black/80 blur-lg -z-50" />
				<p className="architects-daughter-regular text-2xl sm:text-3xl text-center ">
					Welcome to My Portfolio
				</p>
				<p className="architects-daughter-regular text-3xl sm:text-4xl text-center">
					Hi, I'm
				</p>
			</div>
			<div
				className="self-stretch flex justify-between relative
				moderustic tracking-widest font-bold text-7xl sm:text-9xl flex-wrap gap-8"
			>
				<div className="absolute inset-0 bg-black/80 blur-lg -z-50" />
				<div className="relative">
					<p
						className="absolute -right-2 -top-2 sm:-right-2 sm:top-2 
						rotate-[15deg] sm:rotate-[25deg]
						text-sm tracking-wider font-light architects-daughter-regular"
					>
						Hover Me
					</p>
					<ScalingText
						text="XUTAO"
						textStyle="moderustic font-bold text-7xl sm:text-9xl pl-4"
					/>
				</div>
				<ScalingText
					text="GAO"
					textStyle="moderustic font-bold text-7xl sm:text-9xl pl-4"
				/>
			</div>
			<button
				className="mt-36 px-5 py-2 rounded-full bg-neutral-950 relative"
				onClick={goToAboutMePage}
			>
				<div
					className="absolute inset-0 rounded-full
					bg-gradient-to-r from-blue-600 to-purple-600 blur-md -z-50"
				/>
				<div className="flex gap-2 items-center">
					<p className="inter tracking-widest text-lg sm:text-xl font-light">
						Let's Get to Know Me
					</p>
					<GiArrowCursor className="text-xl -rotate-[20deg] animate-bounce" />
				</div>
			</button>
		</div>
	);
};

export default Introduction;
