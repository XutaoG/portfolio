import { MdArrowDownward } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const NextPageButtonContainer = () => {
	const location = useLocation();
	const navigate = useNavigate();

	let nextPageLocation: string | null = null;

	if (location.pathname === "/") {
		nextPageLocation = "/projects";
	} else if (location.pathname === "/projects") {
		nextPageLocation = "/resume";
	} else if (location.pathname === "/resume") {
		nextPageLocation = "/contact";
	} else if (location.pathname === "/contact") {
		nextPageLocation = null;
	}

	return (
		nextPageLocation && (
			<div className="flex justify-center items-center pt-2 pb-10">
				<button
					className="bg-neutral-200 dark:bg-neutral-600
					p-2 rounded-full animate-bounce"
					onClick={() => {
						navigate(nextPageLocation);
					}}
				>
					<MdArrowDownward className="text-3xl" />
				</button>
			</div>
		)
	);
};

export default NextPageButtonContainer;
