import ScrollNotch from "./ScrollNotch";

const ScrollBar = () => {
	const selectedNavIndex = 0;
	const navigations = [
		{ name: "About Me" },
		{ name: "Projects" },
		{ name: "Resume" },
		{ name: "Contact Me" },
	];

	// * Render scroll bar notches
	const renderedNotches = navigations.map((nav, index) => {
		if (selectedNavIndex === index) {
			return (
				<ScrollNotch
					key={index}
					selected
					text={nav.name}
					textFont="anonymous-pro"
				/>
			);
		}
		return (
			<ScrollNotch key={index} text={nav.name} textFont="anonymous-pro" />
		);
	});

	return (
		<div className="w-[3px] h-3/5 flex flex-col justify-between items-center bg-black dark:bg-white">
			<div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white"></div>
			{renderedNotches}
			<div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white"></div>
		</div>
	);
};

export default ScrollBar;
