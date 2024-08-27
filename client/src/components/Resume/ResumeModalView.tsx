import resume from "../../assets/resume/xutao-gao-resume.pdf";

const ResumeModalView = () => {
	return (
		<embed
			className="aspect-[3/4] size-full"
			src={`${resume}#view=FitH`}
			type="application/pdf"
		/>
	);
};

export default ResumeModalView;
