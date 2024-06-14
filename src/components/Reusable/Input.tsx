interface inputProps {
	title: string;
	placeholder: string;
	body?: boolean;
}

const Input = ({ title, placeholder, body }: inputProps) => {
	return (
		<div
			className="py-1 px-2 flex flex-col rounded-md border border-neutral-400
			bg-white dark:bg-neutral-700"
		>
			<p className="crimson-text text-xs">{title}</p>
			{!body ? (
				<input
					className="bg-transparent crimson-text focus:outline-0"
					placeholder={placeholder}
				/>
			) : (
				<textarea
					className="min-h-48 h-96 max-h-[500px] bg-transparent crimson-text focus:outline-0"
					placeholder={placeholder}
					// rows={10}
				/>
			)}
		</div>
	);
};

export default Input;
