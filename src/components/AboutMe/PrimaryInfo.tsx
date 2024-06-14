import Button from "../Reusable/Button";

const PrimaryInfo = () => {
	return (
		<div className="flex flex-col gap-2 sm:gap-6">
			<p className="anonymous-pro text-2xl">Welcome to My Portfolio</p>
			<div className="flex flex-col">
				<p className="anonymous-pro text-2xl">Hi, I'm</p>
				<p
					className={`playfair-display text-5xl text-black dark:text-sky-200`}
				>
					XUTAO GAO
				</p>
			</div>
			<p className="crimson-text">
				I am a Computer Science major at the University of Central
				Florida with a passion for web development and cybersecurity. I
				specialize in software engineering, and I'm dedicated to solving
				complex problems through innovative solutions.
			</p>
			<div className="flex flex-col gap-1 items-center">
				<div className="flex gap-2 items-center">
					<div className="w-1.5 aspect-square bg-green-700 rounded-full"></div>
					<p className="poppins text-green-700">Available for Work</p>
				</div>
				<Button text="Contact Me" textFont="poppins" fill large />
			</div>
		</div>
	);
};

export default PrimaryInfo;
