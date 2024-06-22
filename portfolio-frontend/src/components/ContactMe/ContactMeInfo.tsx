import { Fragment } from "react/jsx-runtime";
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
		<Fragment>
			<p className="playfair-display text-5xl">Get in Touch!</p>
			<p className="crimson-text">
				I'd love to hear from you! Whether you have questions,
				collaboration ideas, or job opportunities, feel free to reach
				out. You can contact me via email or connect with me on LinkedIn
				or GitHub.
			</p>
			<p className="crimson-text">
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
		</Fragment>
	);
};

export default ContactMeInfo;
