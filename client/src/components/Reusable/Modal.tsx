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
			className={`fixed inset-0 ${display} flex justify-center p-4 z-50 overflow-auto text-white`}
		>
			{/* Background */}
			<div
				className="fixed inset-0 bg-black/60 backdrop-blur-sm"
				onClick={onClose}
			></div>
			{/* Content */}
			<div
				className="w-full max-w-[1024px] my-auto p-0.5 rounded-sm
				bg-gradient-to-r from-blue-600/60 to-purple-600/50 z-50"
			>
				{/* Close modal button */}
				<div className="size-full p-4 bg-neutral-950 flex flex-col gap-6 rounded-sm">
					<button
						className="flex gap-1 items-center self-start"
						onClick={onClose}
					>
						<MdArrowBackIosNew />
						<p className="inter tracking-wider font-semibold">
							Close
						</p>
					</button>
					{children}
				</div>
			</div>
		</div>,
		document.getElementById("root")!
	);
};

export default Modal;
