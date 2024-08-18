import Cookies from "universal-cookie";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleCanvasMode } from "../../store/slices/systemSlice";
import ToggleButton from "../Reusable/ToggleButton";

const BackgroundSettingPanel = () => {
	const dispatch = useAppDispatch();
	const cookies = new Cookies(null, { path: "/", maxAge: 60 * 60 * 24 * 30 });
	const canvasMode = useAppSelector((state) => state.system.canvasMode);

	const onCanvasChange = () => {
		dispatch(toggleCanvasMode(!canvasMode));
		cookies.set("canvas", { on: !canvasMode });
	};
	return (
		<div
			className="h-full flex flex-col items-center justify-center px-24 
					gap-2 bg-blue-500 rounded-md inter text-black"
		>
			<p className="font-light tracking-widest">Background</p>
			<ToggleButton
				offText="Off"
				onText="On"
				onToggleClick={onCanvasChange}
				mode={canvasMode}
			/>
		</div>
	);
};

export default BackgroundSettingPanel;
