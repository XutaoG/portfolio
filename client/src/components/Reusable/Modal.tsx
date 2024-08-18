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
		if (show) {
			document.body.classList.add("overflow-hidden");
		}

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [show]);

	return createPortal(
		<div
			className={`fixed inset-0 ${display} flex justify-center p-4 overflow-auto z-50`}
		>
			{/* Background */}
			<div
				className="fixed inset-0 bg-black opacity-60"
				onClick={onClose}
			></div>
			{/* Content */}
			<div
				className="w-full max-w-[1024px] my-auto bg-white dark:bg-neutral-700 
				flex flex-col p-4 pb-8 gap-4 rounded-sm text-black dark:text-white z-50"
			>
				{/* Close modal button */}
				<button
					className="flex gap-1 items-center self-start"
					onClick={onClose}
				>
					<MdArrowBackIosNew />
					<p className="poppins font-bold hover:underline underline-offset-4">
						Close
					</p>
				</button>
				{children}
			</div>
		</div>,
		document.getElementById("root")!
	);
};

export default Modal;
