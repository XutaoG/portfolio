import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { RefObject, useEffect, useState } from "react";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch, useAppSelector };

const useBreakpointWidthCheck = (breakpoint: number) => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return width >= breakpoint;
};

const useOutsideClick = (
	ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
	callback: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// ! If ref is an array
			if (Array.isArray(ref)) {
				let contains = false;
				ref.forEach((el) => {
					if (
						el.current &&
						el.current.contains(event.target as Node)
					) {
						contains = true;
					}
				});

				if (!contains) {
					callback();
				}
			} else if (
				ref.current &&
				!ref.current.contains(event.target as Node)
			) {
				// * Callback when outside click detected
				callback();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
};

export { useBreakpointWidthCheck, useOutsideClick };
