import { useLocation, useNavigate } from "react-router-dom";
import LogoShuffler from "./LogoShuffler";
import NavigationButton from "./NavigationButton";
import { MdViewHeadline } from "react-icons/md";
import { useBreakpointWidthCheck, useOutsideClick } from "../../hooks";
import { useRef, useState } from "react";

const NavigationBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const navBarBreakPoint = 900;
	const navBarBreakpointCheck = useBreakpointWidthCheck(navBarBreakPoint);

	const [showMobileNavigation, setShowMobileNavigation] = useState(false);

	// ! Detect click outside of mobile navigation
	const mobileNavigationRef = useRef<HTMLDivElement>(null);
	const mobileNavigationToggleRef = useRef<HTMLButtonElement>(null);
	useOutsideClick([mobileNavigationRef, mobileNavigationToggleRef], () => {
		setShowMobileNavigation(false);
	});

	const toggleShowMobileNavigation = () => {
		setShowMobileNavigation((value) => !value);
	};

	const navigations = [
		{ name: "Lander", destination: "/" },
		{ name: "About Me", destination: "/about-me" },
		{ name: "Projects", destination: "/projects" },
		{ name: "Resume", destination: "/resume" },
		{ name: "Contact Me", destination: "/contact" },
	];

	// * Render all navigation buttons
	const renderedNavigationButtons = navigations.map((nav, index) => {
		if (nav.destination === location.pathname) {
			return (
				<NavigationButton
					key={index}
					text={nav.name}
					textFont="poppins"
					selected
					disabled
					mobile={!navBarBreakpointCheck}
					onClick={() => {
						navigate(nav.destination);
					}}
				/>
			);
		}
		return (
			<NavigationButton
				key={index}
				text={nav.name}
				textFont="poppins"
				mobile={!navBarBreakpointCheck}
				onClick={() => {
					navigate(nav.destination);
				}}
			/>
		);
	});

	return (
		<div className="h-10 md:h-12 flex justify-between gap-2 relative z-30 m-2">
			<div className="flex gap-1">
				{/* Display navigation open button inside navigation bar when viewport width is below breakpoint */}
				{!navBarBreakpointCheck && (
					<button
						className="h-full aspect-square flex justify-center items-center border-2 border-white
							text-2xl hover:scale-[1.1] transition-transform duration-300"
						ref={mobileNavigationToggleRef}
						onClick={toggleShowMobileNavigation}
					>
						<MdViewHeadline />
					</button>
				)}
				<div className="h-full flex items-center gap-2 p-1 pr-2 border-2 border-white">
					<LogoShuffler />
					<p className="poppins font-medium text-nowrap text-lg tracking-wide">
						XUTAO GAO
					</p>
				</div>
			</div>
			{/* Display navigation buttons inside navigation bar when viewport width exceeds breakpoint */}
			{navBarBreakpointCheck ? (
				<div className="flex gap-4">{renderedNavigationButtons}</div>
			) : null}
			{/* Display mobile navigation */}
			{!navBarBreakpointCheck && (
				<div
					className="absolute inset-0 top-[110%] z-30"
					ref={mobileNavigationRef}
				>
					<div
						className={`p-2 flex flex-col gap-2 border-2 border-white bg-neutral-950 scale-y-0 origin-top
							${
								showMobileNavigation && "scale-y-100"
							} transition-transform duration-500 transform-gpu`}
					>
						{renderedNavigationButtons}
					</div>
				</div>
			)}
		</div>
	);
};

export default NavigationBar;
