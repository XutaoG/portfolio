import { MdOutlineSettings } from "react-icons/md";
import ToggleButton from "./ToggleButton";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleCanvasMode } from "../store/slices/systemSlice";

const SettingsDropdown = () => {
	const canvasMode = useAppSelector((state) => state.system.canvasMode);
	const dispatch = useAppDispatch();

	// ! Switch between light and dark mode
	const onCanvasChange = () => {
		dispatch(toggleCanvasMode(!canvasMode));
	};

	return (
		<div className="relative">
			<div
				className="bg-gradient-to-r from-blue-700 to-purple-700 text-white text-xl p-0.5 
					rounded-md cursor-pointer hover:scale-125 transition-transform duration-300"
			>
				<MdOutlineSettings />
			</div>
			<div
				className="absolute left-1/2 -translate-x-1/2 top-[175%] p-2 rounded-lg
				border border-neutral-400 bg-white dark:bg-neutral-800 dark:border-0
				flex flex-col gap-2"
			>
				<p className="ibm-plex-mono text-sm">Background</p>
				<div className="pl-4">
					<ToggleButton
						offText="Off"
						onText="On"
						onToggleClick={onCanvasChange}
						mode={canvasMode}
					/>
				</div>
			</div>
		</div>
	);
};

export default SettingsDropdown;
