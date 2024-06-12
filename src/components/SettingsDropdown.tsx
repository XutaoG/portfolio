import { MdOutlineSettings } from "react-icons/md";
import ToggleButton from "./ToggleButton";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleCanvasMode, toggleDarkMode } from "../store/slices/systemSlice";
import { useEffect, useRef, useState } from "react";

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
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				// * Close dropdown once outside click is detected
				setShowDropdown(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	const toggleDropdown = () => {
		setShowDropdown((value) => !value);
	};

	return (
		<div className="relative" ref={dropdownRef}>
			<div
				className="bg-gradient-to-r from-blue-700 to-purple-700 text-white text-xl p-0.5 
					rounded-md cursor-pointer hover:scale-125 transition-transform duration-300"
				onClick={toggleDropdown}
			>
				<MdOutlineSettings />
			</div>
			{showDropdown && (
				<div
					className="absolute right-0 top-[175%] p-2 rounded-lg
				border border-neutral-400 bg-white dark:bg-neutral-800 dark:border-0
				flex flex-col gap-2"
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
