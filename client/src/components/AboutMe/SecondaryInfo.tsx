import { MdCalendarMonth, MdLocationOn, MdSchool } from "react-icons/md";

const SecondaryInfo = () => {
	return (
		<div
			className={`flex flex-col md:flex-row md:justify-between flex-wrap gap-x-8 gap-y-2 p-3 text-sm poppins
			rounded-lg bg-neutral-200 border border-neutral-300  dark:border-0 dark:bg-neutral-800`}
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
	);
};

export default SecondaryInfo;
