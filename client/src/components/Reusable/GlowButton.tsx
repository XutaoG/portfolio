import { ComponentPropsWithoutRef } from "react";

interface GlowButton extends ComponentPropsWithoutRef<"button"> {}

const GlowButton = ({ onClick, children }: GlowButton) => {
	return (
		<button
			className="px-5 py-2 rounded-full bg-neutral-950 relative hover:bg-neutral-950/70"
			onClick={onClick}
		>
			<div
				className="absolute inset-0 rounded-full
				bg-gradient-to-r from-blue-600 to-purple-600 blur-md -z-50"
			/>
			<div className="flex gap-2 items-center">{children}</div>
		</button>
	);
};

export default GlowButton;
