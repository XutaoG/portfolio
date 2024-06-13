import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useAppSelector } from "../hooks";
import ScrollBar from "../components/ScrollBar";
import BackgroundCanvas from "../components/BackgroundCanvas";
import NextPageButtonContainer from "../components/Reusable/NextPageButtonContainer";

const Root = () => {
	const darkMode = useAppSelector((state) => state.system.darkMode);

	return (
		<div
			className={`
				${darkMode ? "dark" : ""} min-h-dvh flex flex-col gap-4 p-4 pb-0
				text-black dark:text-white 
				transition-colors duration-300`}
		>
			<div className="-z-50">
				<BackgroundCanvas />
			</div>
			<NavigationBar />
			<div className="grow flex">
				{/* Content container */}
				<div className="grow flex flex-col">
					<div className="grow container mx-auto flex justify-center">
						<Outlet />
					</div>
					{/* Down arrow container */}
					<NextPageButtonContainer />
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
};

export default Root;
