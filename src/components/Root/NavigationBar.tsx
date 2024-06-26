import { useLocation, useNavigate } from "react-router-dom";
import LogoShuffler from "./LogoShuffler";
import NavigationButton from "./NavigationButton";
import SettingsDropdown from "./SettingsDropdown";
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
		{ name: "About Me", destination: "/" },
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
		<div
			className="h-10 md:h-12 flex justify-between rounded-lg p-1 gap-2
			bg-white border border-neutral-400 dark:bg-neutral-800 dark:border-0 relative"
		>
			<div className="flex gap-1">
				{/* Display navigation open button inside navigation bar when viewport width is below breakpoint */}
				{!navBarBreakpointCheck && (
					<button
						className="h-full aspect-square flex justify-center items-center 
							bg-neutral-500 dark:bg-neutral-600 text-white text-2xl p-0.5 
							rounded-md hover:scale-[1.1] transition-transform duration-300"
						ref={mobileNavigationToggleRef}
						onClick={toggleShowMobileNavigation}
					>
						<MdViewHeadline />
					</button>
				)}
				<div
					className="h-full flex items-center gap-2 p-0.5 pr-1 rounded-lg 
					bg-neutral-300 dark:bg-neutral-900"
				>
					<LogoShuffler />
					<p className="poppins font-medium text-nowrap">XUTAO GAO</p>
				</div>
			</div>
			{/* Display navigation buttons inside navigation bar when viewport width exceeds breakpoint */}
			{navBarBreakpointCheck ? (
				<div className="flex gap-2">{renderedNavigationButtons}</div>
			) : null}
			<SettingsDropdown />
			{/* Display mobile navigation */}
			{!navBarBreakpointCheck && showMobileNavigation && (
				<div
					className="absolute inset-0 top-[110%] z-30"
					ref={mobileNavigationRef}
				>
					<div
						className="p-1 rounded-lg flex flex-col gap-1
						bg-white border border-neutral-400 dark:bg-neutral-800 dark:border-0"
					>
						{renderedNavigationButtons}
					</div>
				</div>
			)}
		</div>
	);
};

export default NavigationBar;
