import { useLocation, useNavigate } from "react-router-dom";
import LogoShuffler from "./LogoShuffler";
import NavigationButton from "./NavigationButton";
import { MdViewHeadline } from "react-icons/md";
import { useBreakpointWidthCheck, useOutsideClick } from "../../hooks";
import { useRef, useState } from "react";

const NavigationBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const navBarBreakPoint = 800;
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
		{ name: "About", destination: "/about" },
		{ name: "Projects", destination: "/projects" },
		{ name: "Resume", destination: "/resume" },
		{ name: "Contact", destination: "/contact", highlight: true },
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
					highlight={nav.highlight}
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
				highlight={nav.highlight}
				onClick={() => {
					navigate(nav.destination);
				}}
			/>
		);
	});

	return (
		<div className="h-10 flex justify-between gap-2 relative z-30 m-2">
			<div className="flex gap-1">
				{/* Display navigation open button inside navigation bar when viewport width is below breakpoint */}
				{!navBarBreakpointCheck && (
					<button
						className="h-full aspect-square flex justify-center items-center
							text-3xl hover:scale-[1.1] transition-transform duration-300"
						ref={mobileNavigationToggleRef}
						onClick={toggleShowMobileNavigation}
					>
						<MdViewHeadline />
					</button>
				)}
				<div
					className="h-full flex items-center gap-2 p-1 pr-2 relative 
					bg-neutral-950 rounded-md"
				>
					<div
						className="absolute inset-0
						bg-gradient-to-r from-blue-600 to-purple-600 blur-sm -z-50"
					/>
					<LogoShuffler />
					<p className="moderustic font-medium text-nowrap text-lg tracking-wide">
						xutaogao.com
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
					className="absolute inset-0 top-[120%] z-30"
					ref={mobileNavigationRef}
				>
					<div
						className={`p-4 rounded-sm flex flex-col gap-2 bg-black/75 scale-y-0 origin-top 
							border border-white/10 opacity-0
							${
								showMobileNavigation &&
								"scale-y-100 opacity-100"
							} transition-all duration-500 transform-gpu`}
					>
						{renderedNavigationButtons}
					</div>
				</div>
			)}
		</div>
	);
};

export default NavigationBar;
