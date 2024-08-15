import ContactMeForm from "../components/ContactMe/ContactMeForm";
import ContactMeInfo from "../components/ContactMe/ContactMeInfo";
import PhotoShuffler from "../components/Reusable/PhotoShuffler";

const ContactMePage = () => {
	return (
		<div className="flex justify-center items-center gap-6">
			{/* Photos */}

			<div className="hidden lg:block w-96 aspect-[2/3]">
				<PhotoShuffler photos={[]} />
			</div>

			{/* Info */}
			<div className="max-w-[640px] flex flex-col justify-center gap-6">
				<ContactMeInfo />
				<ContactMeForm />
			</div>
		</div>
	);
};

export default ContactMePage;
