import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Root/NavigationBar";
import { useAppSelector } from "../hooks";
import ScrollBar from "../components/Root/ScrollBar";
import BackgroundCanvas from "../components/Root/BackgroundCanvas";
import NextPageButtonContainer from "../components/Reusable/NextPageButtonContainer";

const Root = () => {
	const darkMode = useAppSelector((state) => state.system.darkMode);

	return (
		<div
			className={`
				${darkMode ? "dark" : ""} min-h-dvh flex flex-col gap-4 p-2 pb-0 sm:p-4 sm:pb-0
				text-black dark:text-white 
				transition-colors duration-300`}
		>
			<BackgroundCanvas />
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
				<ScrollBar />
			</div>
		</div>
	);
};

export default Root;
