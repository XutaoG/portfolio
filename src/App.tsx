import NavigationBar from "./components/NavigationBar";
import { useAppSelector } from "./hooks";
import AboutMePage from "./pages/AboutMePage";
import ScrollBar from "./components/ScrollBar";

function App() {
	const darkMode = useAppSelector((state) => state.system.darkMode)
		? "dark"
		: "";

	return (
		<div
			className={`${darkMode} h-dvh flex flex-col gap-4 p-4 pb-0 
			bg-white dark:bg-neutral-700 text-black dark:text-white 
			transition-colors duration-1000`}
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
