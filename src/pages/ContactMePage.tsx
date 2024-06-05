import Button from "../components/Button";
import Input from "../components/Input";
import PhotoShuffler from "../components/PhotoShuffler";

const ContactMePage = () => {
	return (
		<div className="flex justify-center items-center gap-8">
			{/* Photos */}
			<div className="h-[500px] flex">
				<PhotoShuffler />
			</div>
			{/* Info */}
			<div className="w-[450px] flex flex-col justify-center gap-6">
				<p className="playfair-display text-5xl">Get in Touch!</p>
				<p className="crimson-text">
					I'd love to hear from you! Whether you have questions,
					collaboration ideas, or job opportunities, feel free to
					reach out. You can contact me via email or connect with me
					on LinkedIn or GitHub.
				</p>
				<p className="crimson-text">
					For your convenience, there's also a contact form below.
					Looking forward to connecting with you!
				</p>
				<div className="flex gap-4">
					<Button text="/E-mail" textFont="ibm-plex-mono" fill />
					<Button text="/GitHub" textFont="ibm-plex-mono" fill />
					<Button text="/LinkedIn" textFont="ibm-plex-mono" fill />
				</div>
				<form
					className="p-3 border-neutral-400 bg-neutral-200 dark:bg-neutral-600 dark:border-0
					flex flex-col gap-4"
				>
					<Input title="Full name" placeholder="Xutao Gao" />
					<Input title="E-mail" placeholder="example@email.com" />
					<div className="flex flex-col">
						<Input
							title="Message"
							placeholder="Enter your message"
							body
						/>
						<p className="anonymous-pro self-end">0/2000</p>
					</div>
					<Button
						className="self-end"
						text="/submit"
						textFont="ibm-plex-mono"
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactMePage;
