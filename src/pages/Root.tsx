import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useAppSelector } from "../hooks";
import ScrollBar from "../components/ScrollBar";
import { MdArrowDownward } from "react-icons/md";

const Root = () => {
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
				{/* Content container */}
				<div className="grow flex flex-col">
					<div className="grow flex justify-center">
						<Outlet />
					</div>
					{/* Down arrow container */}
					<div className="flex justify-center items-center pt-8 pb-16">
						<button
							className="bg-neutral-200 dark:bg-neutral-600
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
};

export default Root;
