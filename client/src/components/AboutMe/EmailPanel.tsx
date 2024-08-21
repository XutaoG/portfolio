import { useState } from "react";
import GlowPanel from "../Reusable/GlowPanel";
import { useAppDispatch } from "../../hooks";
import { addAlert } from "../../store/slices/alertSlice";

const EmailPanel = () => {
	const [showCopyHint, setShowCopyHint] = useState(false);
	const dispatch = useAppDispatch();

	const onEmailHoverEnter = () => {
		setShowCopyHint(true);
	};

	const onEmailHoverLeave = () => {
		setShowCopyHint(false);
	};

	const copyEmail = () => {
		navigator.clipboard.writeText("xu611268@ucf.edu");
		dispatch(
			addAlert({
				id: "",
				message: "E-mail copied",
				textStyle: "text-green-500",
				expireTimer: 3000,
			})
		);
	};

	return (
		<GlowPanel
			className="h-full flex flex-col items-center justify-center 
			gap-1 inter text-white hover:cursor-pointer"
			onMouseEnter={onEmailHoverEnter}
			onMouseLeave={onEmailHoverLeave}
			onClick={copyEmail}
		>
			<p
				className={`font-light tracking-widest ${
					showCopyHint && "-translate-y-2"
				} transition-transform transform-gpu`}
			>
				Email
			</p>
			<p
				className={`text-xl md:text-2xl tracking-wider font-light ${
					showCopyHint && "-translate-y-2"
				} transition-transform transform-gpu`}
			>
				xu611268@ucf.edu
			</p>
			<p
				className={`absolute bottom-2 md:bottom-4 text-sm tracking-wide opacity-0 ${
					showCopyHint && "opacity-100"
				} transition-opacity`}
			>
				(Click to copy)
			</p>
		</GlowPanel>
	);
};

export default EmailPanel;
