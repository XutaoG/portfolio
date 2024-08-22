import ContactMeInfo from "../components/ContactMe/ContactMeInfo";
// import PhotoShuffler from "../components/Reusable/PhotoShuffler";

const ContactMePage = () => {
	return (
		<div className="flex justify-center items-center gap-6 pb-4">
			{/* Photos */}
			{/* <div className="hidden lg:block w-96 aspect-[2/3]">
				<PhotoShuffler photos={[]} />
			</div> */}
			{/* Information */}
			<ContactMeInfo />
		</div>
	);
};

export default ContactMePage;
