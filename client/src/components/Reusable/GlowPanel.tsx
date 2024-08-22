import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface GlowPanelProps extends ComponentPropsWithoutRef<"div"> {}

const GlowPanel = ({ children, className, ...rest }: GlowPanelProps) => {
	const styles = twMerge(
		classNames("relative bg-black/85 rounded-lg"),
		className
	);

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ rotate: 360, scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 150,
				damping: 20,
			}}
			whileHover={{ scale: 1.05 }}
			className="size-full"
		>
			<div className={styles} {...rest}>
				<div
					className="absolute inset-0 rounded-md
				bg-gradient-to-r from-blue-600/60 to-purple-600/60 blur-sm -z-50"
				/>
				{children}
			</div>
		</motion.div>
	);
};

export default GlowPanel;
