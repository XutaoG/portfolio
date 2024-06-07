import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { MdArrowBackIosNew } from "react-icons/md";

interface modalProps {
	show: boolean;
	children?: ReactNode;
	onClose: () => void;
}

const Modal = ({ show, children, onClose }: modalProps) => {
	const display = show ? "" : "hidden";

	// * Disable scrolling while modal is open
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return createPortal(
		<div className={`${display}`}>
			<div
				className="fixed inset-0 bg-black opacity-60"
				onClick={onClose}
			></div>
			<div
				className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
				bg-white flex flex-col p-4 gap-4 rounded-md"
			>
				{/* Close modal button */}
				<button
					className="flex gap-1 items-center self-start"
					onClick={onClose}
				>
					<MdArrowBackIosNew />
					<p className="ibm-plex-mono font-bold hover:underline underline-offset-4">
						Back
					</p>
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default Modal;
