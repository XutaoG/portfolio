import Button from "./Button";
import DarkModeToggleButton from "./DarkModeToggleButton";
import LogoShuffler from "./LogoShuffler";

const NavigationBar = () => {
	const selectedNavIndex = 0;
	const navigations = [
		{ name: "About Me" },
		{ name: "Projects" },
		{ name: "Resume" },
		{ name: "Contact Me" },
	];

	// * Render all navigation buttons
	const renderedNavigationButtons = navigations.map((nav, index) => {
		if (selectedNavIndex === index) {
			return (
				<Button
					key={index}
					text={nav.name}
					textFont="poppins"
					fixedWidth
					navStyle
					selected
				/>
			);
		}
		return (
			<Button
				key={index}
				text={nav.name}
				textFont="poppins"
				fixedWidth
				navStyle
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
				<p className="playfair-display text-inherit">XUTAO GAO</p>
			</div>
			<div
				className="grow rounded-lg flex justify-between ${colorStyles}
				bg-white border border-neutral-400 dark:bg-neutral-800 dark:border-0"
			>
				<div className="p-1 flex">{renderedNavigationButtons} </div>
				<div className="p-1 pr-2 flex items-center">
					<DarkModeToggleButton />
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
