import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleDarkMode } from "../store/slices/systemSlice";

const DarkModeToggleButton = () => {
	const darkMode = useAppSelector((state) => state.system.darkMode);
	const dispatch = useAppDispatch();

	// ! Switch between light and dark mode
	const onToggleClick = () => {
		dispatch(toggleDarkMode(!darkMode));
	};

	return (
		<div className="flex gap-2.5 items-center">
			<p className="poppins font-medium">Light</p>
			<button
				className="w-10 bg-gradient-to-r from-blue-700 to-purple-700
				flex justify-start items-center rounded-full p-1
				hover:scale-125 transition-transform duration-300"
				onClick={onToggleClick}
			>
				<div
					className="w-4 aspect-square bg-white rounded-full dark:translate-x-4
					transition-transform duration-500"
				></div>
			</button>
			<p className="poppins font-medium">Dark</p>
		</div>
	);
};

export default DarkModeToggleButton;
