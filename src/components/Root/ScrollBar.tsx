import { useLocation, useNavigate } from "react-router-dom";
import ScrollNotch from "./ScrollNotch";

const ScrollBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const navigations = [
		{ name: "About Me", destination: "/" },
		{ name: "Projects", destination: "/projects" },
		{ name: "Resume", destination: "/resume" },
		{ name: "Contact Me", destination: "/contact" },
	];

	// * Render scroll bar notches
	const renderedNotches = navigations.map((nav, index) => {
		if (nav.destination === location.pathname) {
			return (
				<ScrollNotch
					key={index}
					text={nav.name}
					textFont="anonymous-pro"
					selected
					disabled
					onClick={() => {
						navigate(nav.destination);
					}}
				/>
			);
		}
		return (
			<ScrollNotch
				key={index}
				text={nav.name}
				textFont="anonymous-pro"
				onClick={() => {
					navigate(nav.destination);
				}}
			/>
		);
	});

	return (
		<div className="w-[3px] h-[60dvh] flex flex-col justify-between items-center bg-black dark:bg-white">
			<div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white"></div>
			{renderedNotches}
			<div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white"></div>
		</div>
	);
};

export default ScrollBar;
