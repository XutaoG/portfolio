import { useOutlet } from "react-router-dom";
import NavigationBar from "../components/Root/NavigationBar";
import BackgroundCanvas from "../components/Root/BackgroundCanvas";
import NextPageButtonContainer from "../components/Reusable/NextPageButtonContainer";
import { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import BackgroundColumns from "../components/Root/BackgroundColumns";

const Root = () => {
	const currentOutlet = useOutlet();
	const nodeRef = useRef(null);

	return (
		<div
			className={`
				min-h-dvh flex flex-col gap-4
				text-white bg-neutral-950
				transition-colors duration-300 relative`}
		>
			<BackgroundColumns />
			<BackgroundCanvas />
			<NavigationBar />
			<div className="grow flex z-20">
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
								className="grow flex justify-center items-center px-3 md:px-4"
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
			</div>
		</div>
	);
};

export default Root;
