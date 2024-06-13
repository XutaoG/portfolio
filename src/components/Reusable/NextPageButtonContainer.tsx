import { MdArrowDownward } from "react-icons/md";

const NextPageButtonContainer = () => {
	return (
		<div className="flex justify-center items-center pt-8 pb-16">
			<button
				className="bg-neutral-200 dark:bg-neutral-600
				p-2 rounded-full animate-bounce"
			>
				<MdArrowDownward className="text-3xl" />
			</button>
		</div>
	);
};

export default NextPageButtonContainer;
