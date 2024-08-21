import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface DarkenedPanelProps extends ComponentPropsWithoutRef<"div"> {}

const DarkenedPanel = ({
	children,
	className,
	...rest
}: DarkenedPanelProps) => {
	const styles = twMerge(classNames("relative"), className);
	return (
		<div className={styles} {...rest}>
			<div className="absolute inset-0 bg-black/80 blur-lg -z-50" />
			{children}
		</div>
	);
};

export default DarkenedPanel;
