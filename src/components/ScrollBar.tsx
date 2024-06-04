import { twMerge } from "tailwind-merge";
import { useAppSelector } from "../hooks";
import ScrollNotch from "./ScrollNotch";
import classNames from "classnames";

const ScrollBar = () => {
	const darkMode = useAppSelector((state) => state.system.darkMode);

	const backgroundColor = twMerge(
		classNames("bg-black", {
			"bg-white": darkMode,
		})
	);

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
					selected
					text={nav.name}
					textFont="anonymous-pro"
				/>
			);
		}
		return <ScrollNotch text={nav.name} textFont="anonymous-pro" />;
	});

	return (
		<div
			className={`w-[3px] h-3/5 flex flex-col justify-between items-center ${backgroundColor}`}
		>
			<div
				className={`w-2.5 h-2.5 rounded-full ${backgroundColor}`}
			></div>
			{renderedNotches}
			<div
				className={`w-2.5 h-2.5 rounded-full ${backgroundColor}`}
			></div>
		</div>
	);
};

export default ScrollBar;
