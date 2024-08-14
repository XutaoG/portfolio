interface inputProps {
	title: string;
	placeholder: string;
}

const Input = ({ title, placeholder }: inputProps) => {
	return (
		<div
			className="py-1 px-2 flex flex-col rounded-md border border-neutral-400
			bg-white dark:bg-neutral-700"
		>
			<p className="crimson-text text-xs">{title}</p>

			<input
				className="bg-transparent crimson-text focus:outline-0"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
