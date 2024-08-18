import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { RefObject, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch, useAppSelector };

const useBreakpointWidthCheck = (breakpoint: number) => {
	const [reached, setReached] = useState(false);

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth >= breakpoint && !reached) {
				setReached(true);
			} else if (window.innerWidth < breakpoint && reached) {
				setReached(false);
			}
		};
		handleWindowResize();
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, [breakpoint, reached]);

	return reached;
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

const useChangePageByScroll = (
	prevRoute: string | null,
	nextRoute: string | null
) => {
	const navigate = useNavigate();
	const disableTime = 2000;
	const disabled = useRef(false);

	useEffect(() => {
		const handleScroll = (event: WheelEvent) => {
			if (disabled.current) {
				return;
			}
			if (event.deltaY !== 0) {
				if (event.deltaY < 0) {
					if (prevRoute !== null) {
						navigate(prevRoute);
					}
				} else if (event.deltaY > 0) {
					if (nextRoute !== null) {
						navigate(nextRoute);
					}
				}

				disabled.current = true;
				setTimeout(() => {
					disabled.current = false;
				}, disableTime);
			}
		};
		window.addEventListener("wheel", handleScroll);

		return () => {
			window.removeEventListener("wheel", handleScroll);
		};
	}, [navigate, nextRoute, prevRoute]);
};

export { useBreakpointWidthCheck, useOutsideClick, useChangePageByScroll };
