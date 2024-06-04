import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleDarkMode } from "../store/slices/systemSlice";

const DisplayModeToggleButton = () => {
	const darkMode = useAppSelector((state) => state.system.darkMode);
	const dispatch = useAppDispatch();

	const untoggledStyle = twMerge(
		classNames(
			"w-4 aspect-square flex justify-center items-center bg-transparent text-neutral-800"
		)
	);

	const toggledStyle = twMerge(
		classNames(
			"w-4 aspect-square flex justify-center items-center bg-white rounded-full text-white"
		)
	);

	// ! Switch between light and dark mode
	const onToggleClick = () => {
		dispatch(toggleDarkMode(!darkMode));
	};

	return (
		<div className="flex gap-2 items-center">
			<p className="poppins font-medium">Light</p>
			<button
				className="bg-gradient-to-r from-blue-700 to-purple-700 flex items-center rounded-full p-1"
				onClick={onToggleClick}
			>
				<div className={darkMode ? untoggledStyle : toggledStyle}></div>
				<div className={darkMode ? toggledStyle : untoggledStyle}></div>
			</button>
			<p className="poppins font-medium">Dark</p>
		</div>
	);
};

export default DisplayModeToggleButton;
