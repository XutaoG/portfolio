import ScalingText from "../Reusable/ScalingText";
import DarkenedPanel from "../Reusable/DarkenedPanel";
import LinkedInPanel from "../AboutMe/LinkedInPanel";
import ContactFormPanel from "./ContactFormPanel";
import GitHubPanel from "../AboutMe/GitHubPanel";
import PhoneNumberPanel from "../AboutMe/PhoneNumberPanel";
import EmailPanel from "../AboutMe/EmailPanel";

const ContactMeInfo = () => {
	return (
		<div className="max-w-[1024px] flex flex-col justify-center gap-12">
			<DarkenedPanel className="flex justify-between flex-wrap">
				<ScalingText
					text="CONTACT"
					textStyle="moderustic font-bold text-4xl sm:text-6xl"
				/>
				<ScalingText
					text="ME"
					textStyle="moderustic font-bold text-4xl sm:text-6xl"
				/>
			</DarkenedPanel>
			<DarkenedPanel className="flex flex-col gap-4 text-lg inter tracking-wide leading-7 font-light">
				<p>
					I'd love to hear from you! Whether you have questions,
					collaboration ideas, or job opportunities, feel free to
					reach out. You can contact me via email or connect with me
					on LinkedIn or GitHub.
				</p>
				<p>
					For your convenience, there's also a contact form below.
					Looking forward to connecting with you!
				</p>
			</DarkenedPanel>
			<div className="grid grid-cols-2 grid-rows-7 md:grid-cols-5 md:grid-rows-7 gap-3 md:gap-5">
				<div className="col-span-1 row-span-1 md:col-span-1 md:row-span-2">
					<GitHubPanel />
				</div>
				<div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1">
					<LinkedInPanel />
				</div>
				<div className="col-span-2 row-span-1 md:col-span-2 md:row-span-1">
					<PhoneNumberPanel />
				</div>
				<div className="col-span-2 row-span-1 md:col-span-4 md:row-span-1 h-24 md:h-32">
					<EmailPanel />
				</div>
				<div className="col-span-2 row-span-5 md:col-span-5 md:row-span-5">
					<ContactFormPanel />
				</div>
			</div>
		</div>
	);
};

export default ContactMeInfo;
