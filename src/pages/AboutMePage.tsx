import Button from "../components/Button";
import { MdLocationOn, MdSchool, MdCalendarMonth } from "react-icons/md";
import PhotoShuffler from "../components/PhotoShuffler";

const AboutMePage = () => {
	return (
		<div className="flex flex-col justify-center gap-5">
			<div className="flex gap-5">
				{/* Picture */}
				<PhotoShuffler />
				{/* Introduction */}
				<div className="flex flex-col gap-6 w-min">
					<p className="anonymous-pro text-3xl w-max">
						Welcome to My Portfolio
					</p>
					<div className="flex flex-col">
						<p className="anonymous-pro text-3xl">Hi, I'm</p>
						<p
							className={`playfair-display text-6xl text-black dark:text-sky-200`}
						>
							XUTAO GAO
						</p>
					</div>
					<p className="crimson-text">
						I am a Computer Science major at the University of
						Central Florida with a passion for web development and
						cybersecurity. I specialize in software engineering, and
						I'm dedicated to solving complex problems through
						innovative solutions.
					</p>
					<div className="flex flex-col gap-1 items-center">
						<div className="flex gap-2 items-center">
							<div className="w-1.5 aspect-square bg-green-700 rounded-full"></div>
							<p className="poppins text-green-700">
								Available for Work
							</p>
						</div>
						<Button
							text="Contact Me"
							textFont="poppins"
							fill
							large
						/>
					</div>
				</div>
			</div>
			{/* Secondary information */}
			<div
				className={`flex justify-between items-center p-3 text-sm poppins
				bg-neutral-200 border border-neutral-300 rounded-lg dark:border-0 dark:bg-neutral-800`}
			>
				<div className="flex gap-1 items-center">
					<MdLocationOn className="text-xl" />
					<p>Orlando, Florida</p>
				</div>
				<div className="flex gap-1 items-center">
					<MdSchool className="text-xl" />
					<p>University of Central Florida</p>
				</div>
				<div className="flex gap-1 items-center">
					<MdCalendarMonth className="text-xl" />
					<p>Expected Graduation: May 2026</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMePage;
