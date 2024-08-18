import { useState } from "react";

const EmailPanel = () => {
	const [showEmailHint, setShowEmailHint] = useState(false);

	const onEmailHoverEnter = () => {
		setShowEmailHint(true);
	};

	const onEmailHoverLeave = () => {
		setShowEmailHint(false);
	};

	return (
		<div
			className="h-full p-6 flex flex-col items-center justify-center 
	gap-1 bg-white rounded-md inter text-black hover:cursor-pointer relative"
			onMouseEnter={onEmailHoverEnter}
			onMouseLeave={onEmailHoverLeave}
		>
			<p
				className={`font-light tracking-widest ${
					showEmailHint && "-translate-y-2"
				} transition-transform transform-gpu`}
			>
				Email
			</p>
			<p
				className={`text-2xl tracking-wider font-light ${
					showEmailHint && "-translate-y-2"
				} transition-transform transform-gpu`}
			>
				xu611268@ucf.edu
			</p>
			<p
				className={`absolute bottom-4 text-sm tracking-wide opacity-0 ${
					showEmailHint && "opacity-100"
				} transition-opacity`}
			>
				(Click to copy)
			</p>
		</div>
	);
};

export default EmailPanel;
