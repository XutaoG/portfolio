import Button from "../Reusable/Button";
import { useState } from "react";

const ContactMeInfo = () => {
	const [emailText, setEmailText] = useState("/E-mail");

	const showEmail = () => {
		setEmailText("xu611268@ucf.edu");
	};

	const hideEmail = () => {
		setEmailText("/E-mail");
	};

	const copyEmail = () => {
		navigator.clipboard.writeText("xu611268@ucf.edu");
		setEmailText("Copied");
	};

	return (
		<div className="max-w-[640px] flex flex-col justify-center gap-6">
			<p
				className="architects-daughter-regular text-2xl self-end border border-white px-2 
				rotate-3 hover:-rotate-3 transition-transform transform-gpu"
			>
				Message Me !
			</p>
			<p className="moderustic tracking-widest font-bold text-4xl leading-snug">
				Get in Touch!
			</p>
			<p className="crimson-pro tracking-wide md:text-lg">
				I'd love to hear from you! Whether you have questions,
				collaboration ideas, or job opportunities, feel free to reach
				out. You can contact me via email or connect with me on LinkedIn
				or GitHub.
			</p>
			<p className="crimson-pro tracking-wide md:text-lg">
				For your convenience, there's also a contact form below. Looking
				forward to connecting with you!
			</p>
			<div className="flex flex-col gap-4">
				<Button
					text={emailText}
					textFont="ibm-plex-mono"
					fill
					onMouseOver={showEmail}
					onMouseLeave={hideEmail}
					onClick={copyEmail}
				/>
				<Button
					text="/GitHub"
					textFont="ibm-plex-mono"
					fill
					onClick={() => {
						window.open("https://github.com/XutaoG", "_blank");
					}}
				/>
				<Button
					text="/LinkedIn"
					textFont="ibm-plex-mono"
					fill
					onClick={() => {
						window.open("https://google.com", "_blank");
					}}
				/>
			</div>
		</div>
	);
};

export default ContactMeInfo;
