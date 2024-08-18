import { useState } from "react";

const AgePanel = () => {
	const ageInYear =
		new Date(Date.now() - new Date(2004, 4, 2).getTime()).getUTCFullYear() -
		1970;

	const ageInDays = Math.floor(
		(Date.now() - new Date(2004, 4, 2).getTime()) / 1000 / 60 / 60 / 24
	);
	const [ageText, setAgeText] = useState(`${ageInYear} yr`);

	const displayAgeInDays = () => {
		setAgeText(`${ageInDays} days`);
	};

	const displayAgeInYears = () => {
		setAgeText(`${ageInYear} yr`);
	};
	return (
		<div
			className="size-full flex flex-col items-center justify-center 
			gap-1 bg-gray-800 rounded-md inter text-white"
			onMouseEnter={displayAgeInDays}
			onMouseLeave={displayAgeInYears}
		>
			<p className="font-light tracking-widest">Age</p>
			<p className="text-xl md:text-2xl tracking-wider font-ligh text-center">
				{ageText}
			</p>
		</div>
	);
};

export default AgePanel;
