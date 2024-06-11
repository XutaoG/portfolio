import { useLocation, useNavigate } from "react-router-dom";
import LogoShuffler from "./LogoShuffler";
import NavigationButton from "./NavigationButton";
import SettingsDropdown from "./SettingsDropdown";
import { toggleDarkMode } from "../store/slices/systemSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import ToggleButton from "./ToggleButton";

const NavigationBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const darkMode = useAppSelector((state) => state.system.darkMode);
	const dispatch = useAppDispatch();

	// ! Switch between light and dark mode
	const onColorModeChange = () => {
		dispatch(toggleDarkMode(!darkMode));
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
					fixedWidth
					selected
					disabled
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
				fixedWidth
				onClick={() => {
					navigate(nav.destination);
				}}
			/>
		);
	});

	return (
		<div className="flex gap-2.5">
			<div
				className="rounded-lg flex p-0.5 pr-2 gap-2 items-center 
				bg-white border border-neutral-400 dark:bg-neutral-800 dark:border-0"
			>
				<LogoShuffler className="grow" />
				<p className="playfair-display">XUTAO GAO</p>
			</div>
			<div
				className="grow rounded-lg flex justify-between ${colorStyles}
				bg-white border border-neutral-400 dark:bg-neutral-800 dark:border-0"
			>
				<div className="p-1 flex gap-2">
					{renderedNavigationButtons}
				</div>
				<div className="p-2 flex items-center gap-4">
					<SettingsDropdown />
					<div className="self-stretch w-0.5 bg-black dark:bg-white" />
					<ToggleButton
						offText="Light"
						onText="Dark"
						onToggleClick={onColorModeChange}
						mode={darkMode}
					/>
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
