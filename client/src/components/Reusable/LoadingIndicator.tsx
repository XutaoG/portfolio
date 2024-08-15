import { MdDataUsage } from "react-icons/md";

const LoadingIndicator = () => {
	return (
		<div className="flex justify-center items-center">
			<MdDataUsage className="text-5xl animate-spin" />
		</div>
	);
};

export default LoadingIndicator;
