import { Fragment } from "react/jsx-runtime";
import Button from "../Reusable/Button";

const ContactMeInfo = () => {
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
			<div className="flex gap-4">
				<Button text="/E-mail" textFont="ibm-plex-mono" fill />
				<Button text="/GitHub" textFont="ibm-plex-mono" fill />
				<Button text="/LinkedIn" textFont="ibm-plex-mono" fill />
			</div>
		</Fragment>
	);
};

export default ContactMeInfo;
