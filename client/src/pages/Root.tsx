import { useOutlet } from "react-router-dom";
import NavigationBar from "../components/Root/NavigationBar";
import { useAppSelector } from "../hooks";
import ScrollBar from "../components/Root/ScrollBar";
import BackgroundCanvas from "../components/Root/BackgroundCanvas";
import NextPageButtonContainer from "../components/Reusable/NextPageButtonContainer";
import { useEffect, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Root = () => {
	const darkMode = useAppSelector((state) => state.system.darkMode);

	const currentOutlet = useOutlet();
	const nodeRef = useRef(null);

	useEffect(() => {
		document.getElementById("root")!.className = darkMode ? "dark" : "";
	}, [darkMode]);

	return (
		<div
			className={`
				min-h-dvh flex flex-col gap-4 p-2 pb-0 sm:p-4 sm:pb-0
				text-black dark:text-white 
				transition-colors duration-300`}
		>
			<BackgroundCanvas />
			<NavigationBar />
			<div className="grow flex">
				{/* Content container */}
				<div className="grow flex flex-col gap-4">
					<SwitchTransition>
						<CSSTransition
							key={location.pathname}
							nodeRef={nodeRef}
							timeout={300}
							classNames="page"
							unmountOnExit
						>
							<div
								className="grow container mx-auto flex justify-center"
								ref={nodeRef}
							>
								{/* <Outlet /> */}
								{currentOutlet}
							</div>
						</CSSTransition>
					</SwitchTransition>
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
