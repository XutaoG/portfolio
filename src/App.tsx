import classNames from "classnames";
import NavigationBar from "./components/NavigationBar";
import { useAppSelector } from "./hooks";
import { twMerge } from "tailwind-merge";
import AboutMePage from "./pages/AboutMePage";
import ScrollBar from "./components/ScrollBar";

function App() {
	const darkMode = useAppSelector((state) => state.system.darkMode);

	const backgroundStyle = twMerge(
		classNames("bg-white", {
			"bg-neutral-700": darkMode,
		})
	);

	const textStyles = twMerge(
		classNames("text-black", {
			"text-white": darkMode,
		})
	);

	return (
		<div
			className={`h-dvh flex flex-col gap-4 p-4 pb-0 ${backgroundStyle} ${textStyles}`}
		>
			<NavigationBar />
			<div className="grow flex">
				<div className="grow flex justify-center items-center">
					<AboutMePage />
				</div>
				<div className="w-8 flex justify-center items-center">
					<ScrollBar />
				</div>
			</div>
		</div>
	);
}

export default App;
