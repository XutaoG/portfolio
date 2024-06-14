import { useLocation, useNavigate } from "react-router-dom";
import ScrollNotch from "./ScrollNotch";
import { useBreakpointWidthCheck } from "../../hooks";

const ScrollBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const scrollBarBreakpoint = 900;
	const breakpointCheck = useBreakpointWidthCheck(scrollBarBreakpoint);

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
		breakpointCheck && (
			<div className="w-10 flex justify-center items-center relative">
				<div
					className="fixed top-1/2 -translate-y-1/2 w-[3px] h-[60dvh] 
				flex flex-col justify-between items-center bg-black dark:bg-white"
				>
					<div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white"></div>
					{renderedNotches}
					<div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white"></div>
				</div>
			</div>
		)
	);
};

export default ScrollBar;
