import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";

const CustomCursor = () => {
	const [mousePosition, setMousePosition] = useState<{
		x: number;
		y: number;
	}>({ x: 0, y: 0 });

	const cursor = useAppSelector((state) => state.cursor);

	const cursorVariants = {
		default: {
			opacity: 1,
			borderRadius: "100%",
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			transition: {
				duration: 0,
			},
			zIndex: 50,
		},
		pointer: {
			opacity: 1,
			scale: 0.8,
			borderRadius: "20%",
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			rotate: 45,
			transition: {
				duration: 0,
			},
			zIndex: 50,
		},
	};

	useEffect(() => {
		const mouseMove = (event: MouseEvent) => {
			setMousePosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	return (
		<motion.div
			className="size-8 bg-gradient-to-br from-blue-600/80 to-purple-600/80 fixed top-0 left-0 pointer-events-none"
			variants={cursorVariants}
			animate={cursor}
		/>
	);
};

export default CustomCursor;
