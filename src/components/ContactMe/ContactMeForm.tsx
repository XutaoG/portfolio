import { ChangeEvent, useState } from "react";
import Button from "../Reusable/Button";
import Input from "../Reusable/Input";
import TextArea from "../Reusable/TextArea";

const ContactMeForm = () => {
	// const [fullNameValue, setFullNameValue] = useState("");
	// const [emailValue, setEmailValue] = useState("");
	const [message, setMessage] = useState("");

	// const onFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setFullNameValue(event.target.value);
	// };

	// const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setFullNameValue(event.target.value);
	// };

	const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	};

	return (
		<form
			className="p-3 border-neutral-400 bg-neutral-200 dark:bg-neutral-600 dark:border-0
			flex flex-col gap-4"
		>
			<Input title="Full name" placeholder="Xutao Gao" />
			<Input title="E-mail" placeholder="example@email.com" />
			<div className="flex flex-col">
				<TextArea
					title="Message"
					placeholder="Enter your message"
					onChange={onMessageChange}
				/>
				<p className="anonymous-pro self-end">{message.length}/2000</p>
			</div>
			<div className="self-end">
				<Button text="/submit" textFont="ibm-plex-mono" />
			</div>
		</form>
	);
};

export default ContactMeForm;
