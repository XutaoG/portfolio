import NavigationBar from "./components/NavigationBar";
import { useAppSelector } from "./hooks";
import AboutMePage from "./pages/AboutMePage";
import ScrollBar from "./components/ScrollBar";
import { MdArrowDownward } from "react-icons/md";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
	const darkMode = useAppSelector((state) => state.system.darkMode)
		? "dark"
		: "";

	return (
		<div
			className={`${darkMode} min-h-dvh flex flex-col gap-4 p-4 pb-0 
			bg-white dark:bg-neutral-700 text-black dark:text-white 
			transition-colors duration-300`}
		>
			<NavigationBar />
			<div className="grow flex">
				<div className="grow flex flex-col">
					{/* Content container */}
					{/* <div className="grow flex justify-center items-center">
						<AboutMePage />
					</div> */}
					<div className="grow items-start">
						<ProjectsPage />
					</div>
					{/* Down arrow container */}
					<div className="flex justify-center items-center pt-8 pb-16">
						<button
							className="bg-neutral-300 dark:bg-neutral-500 
							p-2 rounded-full animate-bounce"
						>
							<MdArrowDownward className="text-3xl" />
						</button>
					</div>
				</div>
				{/* Scroll bar container */}
				<div className="w-8 flex justify-center items-start relative">
					<div className="fixed top-[50%] -translate-y-[50%]">
						<ScrollBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
