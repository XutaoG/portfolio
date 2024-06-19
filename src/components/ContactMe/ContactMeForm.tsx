import Button from "../Reusable/Button";
import Input from "../Reusable/Input";

const ContactMeForm = () => {
	return (
		<form
			className="p-3 border-neutral-400 bg-neutral-200 dark:bg-neutral-600 dark:border-0
	flex flex-col gap-4"
		>
			<Input title="Full name" placeholder="Xutao Gao" />
			<Input title="E-mail" placeholder="example@email.com" />
			<div className="flex flex-col">
				<Input title="Message" placeholder="Enter your message" body />
				<p className="anonymous-pro self-end">0/2000</p>
			</div>
			<Button
				className="self-end"
				text="/submit"
				textFont="ibm-plex-mono"
			/>
		</form>
	);
};

export default ContactMeForm;
