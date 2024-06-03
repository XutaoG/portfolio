import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleDisplayMode } from "../store/slices/systemSlice";

interface displayModeToggleButtonProps {
	className?: string;
}

const DisplayModeToggleButton = ({
	className,
}: displayModeToggleButtonProps) => {
	const displayMode = useAppSelector((state) => state.system.displayMode);
	const dispatch = useAppDispatch();

	const styles = twMerge(
		classNames("flex gap-2 items-center", classNames(className))
	);

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
		dispatch(toggleDisplayMode(!displayMode));
	};

	return (
		<div className={styles}>
			<p className="poppins font-medium text-inherit">Light</p>
			<button
				className="bg-gradient-to-r from-blue-700 to-purple-700 flex items-center rounded-full p-1"
				onClick={onToggleClick}
			>
				<div
					className={displayMode ? untoggledStyle : toggledStyle}
				></div>
				<div
					className={displayMode ? toggledStyle : untoggledStyle}
				></div>
			</button>
			<p className="poppins font-medium text-inherit">Dark</p>
		</div>
	);
};

export default DisplayModeToggleButton;
