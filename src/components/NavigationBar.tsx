import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import DisplayModeToggleButton from "./DisplayModeToggleButton";
import { useAppSelector } from "../hooks";
import LogoShuffler from "./LogoShuffler";

interface navigationBarProps {
	className?: string;
}

const NavigationBar = ({ className }: navigationBarProps) => {
	const displayMode = useAppSelector((state) => state.system.displayMode);

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

	const styles = twMerge(classNames("flex gap-2.5", className));

	const logoStyles = twMerge(
		classNames(
			"bg-white border border-neutral-400 rounded-lg flex p-0.5 pr-2 gap-2 items-center",
			{
				"bg-neutral-800 border-0": displayMode,
			}
		)
	);

	const barStyles = twMerge(
		classNames(
			"grow bg-white border border-neutral-400 rounded-lg flex justify-between",
			{
				"bg-neutral-800 border-0": displayMode,
			}
		)
	);

	return (
		<div className={styles}>
			<div className={logoStyles}>
				<LogoShuffler className="grow" />
				<p className="poppins font-medium text-inherit">XUTAOGAO</p>
			</div>
			<div className={barStyles}>
				<div className="p-1 flex">{renderedNavigationButtons}</div>
				<div className="p-1 pr-2 flex items-center">
					<DisplayModeToggleButton />
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
