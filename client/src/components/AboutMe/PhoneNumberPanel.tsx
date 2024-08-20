import { useState } from "react";
import GlowPanel from "../Reusable/GlowPanel";

const PhoneNumberPanel = () => {
	const [showCopyHint, setShowCopyHint] = useState(false);

	const onEmailHoverEnter = () => {
		setShowCopyHint(true);
	};

	const onEmailHoverLeave = () => {
		setShowCopyHint(false);
	};

	const copyPhoneNumber = () => {
		navigator.clipboard.writeText("6462993176");
	};

	return (
		<GlowPanel
			className="h-full flex flex-col items-center justify-center 
			gap-1 inter text-white hover:cursor-pointer"
			onMouseEnter={onEmailHoverEnter}
			onMouseLeave={onEmailHoverLeave}
			onClick={copyPhoneNumber}
		>
			<p
				className={`font-light tracking-widest ${
					showCopyHint && "-translate-y-2"
				} transition-transform transform-gpu`}
			>
				Phone Number
			</p>
			<p
				className={`text-xl md:text-2xl tracking-wider font-light ${
					showCopyHint && "-translate-y-2"
				} transition-transform transform-gpu`}
			>
				(646) 299-3176
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

export default PhoneNumberPanel;
