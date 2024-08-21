import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface GlowPanelProps extends ComponentPropsWithoutRef<"div"> {}

const GlowPanel = ({ children, className, ...rest }: GlowPanelProps) => {
	const styles = twMerge(
		classNames("relative bg-black/85 rounded-lg"),
		className
	);

	return (
		<div className={styles} {...rest}>
			<div
				className="absolute inset-0 rounded-md
				bg-gradient-to-r from-blue-600/60 to-purple-600/60 blur-sm -z-50"
			/>
			{children}
		</div>
	);
};

export default GlowPanel;
