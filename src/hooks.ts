import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { RefObject, useEffect } from "react";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch, useAppSelector };

function useOutsideAlerter(ref: RefObject<HTMLElement>) {
	useEffect(() => {
		// * Alert if clicked on outside of element
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				alert("You clicked outside of me!");
			}
		}
		// * Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// * Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

export default useOutsideAlerter;
