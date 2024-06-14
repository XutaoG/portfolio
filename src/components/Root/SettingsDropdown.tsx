import { MdOutlineSettings } from "react-icons/md";
import ToggleButton from "../Reusable/ToggleButton";
import { useAppDispatch, useAppSelector, useOutsideClick } from "../../hooks";
import {
	toggleCanvasMode,
	toggleDarkMode,
} from "../../store/slices/systemSlice";
import { useRef, useState } from "react";

const SettingsDropdown = () => {
	const canvasMode = useAppSelector((state) => state.system.canvasMode);
	const darkMode = useAppSelector((state) => state.system.darkMode);

	const dispatch = useAppDispatch();

	const [showDropdown, setShowDropdown] = useState(false);

	// ! Switch between light and dark mode
	const onColorModeChange = () => {
		dispatch(toggleDarkMode(!darkMode));
	};

	// ! Switch between canvas on and off
	const onCanvasChange = () => {
		dispatch(toggleCanvasMode(!canvasMode));
	};

	// ! Detect click outside of dropdown component
	const dropdownRef = useRef<HTMLDivElement>(null);
	const dropdownToggleRef = useRef<HTMLButtonElement>(null);
	useOutsideClick([dropdownRef, dropdownToggleRef], () => {
		setShowDropdown(false);
	});

	const toggleDropdown = () => {
		setShowDropdown((value) => !value);
	};

	return (
		<div className="relative">
			<button
				className="h-full aspect-square flex justify-center items-center 
					bg-gradient-to-r from-blue-700 to-purple-700 text-white text-2xl p-0.5 
					rounded-md hover:scale-[1.1] transition-transform duration-300"
				ref={dropdownToggleRef}
				onClick={toggleDropdown}
			>
				<MdOutlineSettings />
			</button>
			{showDropdown && (
				<div
					className="absolute right-0 top-[125%] p-2 rounded-lg z-30
					border border-neutral-400 bg-white dark:bg-neutral-800 dark:border-0
					flex flex-col gap-2"
					ref={dropdownRef}
				>
					<p className="poppins text-sm">Background</p>
					<ToggleButton
						offText="Off"
						onText="On"
						onToggleClick={onCanvasChange}
						mode={canvasMode}
					/>
					<hr className="border-neutral-400" />
					<p className="poppins text-sm">Color Mode</p>
					<ToggleButton
						offText="Light"
						onText="Dark"
						onToggleClick={onColorModeChange}
						mode={darkMode}
					/>
				</div>
			)}
		</div>
	);
};

export default SettingsDropdown;
