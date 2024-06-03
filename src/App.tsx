import classNames from "classnames";
import NavigationBar from "./components/NavigationBar";
import { useAppSelector } from "./hooks";
import { twMerge } from "tailwind-merge";

function App() {
	const displayMode = useAppSelector((state) => state.system.displayMode);

	const backgroundStyle = twMerge(
		classNames("bg-white", {
			"bg-neutral-700": displayMode,
		})
	);

	const textStyles = twMerge(
		classNames("text-black", {
			"text-white": displayMode,
		})
	);

	return (
		<div className={`flex flex-col p-4 ${backgroundStyle} ${textStyles}`}>
			<NavigationBar />
		</div>
	);
}

export default App;
