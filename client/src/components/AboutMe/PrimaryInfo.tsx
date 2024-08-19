import { useNavigate } from "react-router-dom";
import Button from "../Reusable/Button";

const PrimaryInfo = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-2 sm:gap-4">
			<p className="architects-daughter-regular text-2xl">
				Welcome to My Portfolio
			</p>
			<p className="architects-daughter-regular text-2xl">Hi, I'm</p>
			<div className="-rotate-2 transform-gpu">
				<div className="moderustic tracking-widest font-bold text-7xl">
					<p className="bg-blue-600 text-white text-right pr-2 border-2 border-white">
						XUTAO
					</p>
					<p className="bg-black text-blue-500 pl-4 border-2 border-white rotate-1 transform-gpu">
						GAO
					</p>
				</div>
				<div className="flex justify-evenly">
					<div className="h-8 w-0.5 bg-white" />
					<div className="h-8 w-0.5 bg-white" />
				</div>
				<div className="border-2 border-white border-dashed bg-black">
					<p className="crimson-pro tracking-wide p-3 rotate-0 md:text-lg">
						I am a{" "}
						<span
							className="border border-white px-0.5 inline-block
						 rotate-2 hover:rotate-3 transform-gpu"
						>
							Computer Science
						</span>{" "}
						major at the University of Central Florida{" "}
						<span
							className="border border-white px-0.5 inline-block 
							rotate-1 hover:-rotate-3 transform-gpu"
						>
							(UCF)
						</span>{" "}
						with a passion for web development and cybersecurity. I
						specialize in{" "}
						<span
							className="border border-white px-0.5 inline-block 
							rotate-2 hover:rotate-3 transform-gpu"
						>
							software engineering
						</span>
						, and I'm dedicated to solving complex problems through
						innovative solutions.
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-1 items-center">
				<div className="flex gap-2 items-center">
					<div className="relative flex h-3 w-3">
						<div className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
						<div className="rounded-full h-full w-full bg-green-400" />
					</div>
					<p className="poppins text-green-500">Available for Work</p>
				</div>
				<Button
					text="Contact Me"
					textFont="poppins"
					fill
					large
					onClick={() => navigate("/contact")}
				/>
			</div>
		</div>
	);
};

export default PrimaryInfo;
