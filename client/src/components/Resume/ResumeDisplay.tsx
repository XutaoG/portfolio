const ResumeDisplay = () => {
	return (
		<div className="w-full flex flex-col gap-2">
			<embed
				className="w-full aspect-[3/4]"
				src="/src/assets/resume/xutao-gao-resume.pdf#view=FitH"
				type="application/pdf"
			/>
			<p className="inter tracking-wider self-end">Last Updated: 8/24</p>
		</div>
	);
};

export default ResumeDisplay;
