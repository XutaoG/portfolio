interface inputProps {
	title: string;
	placeholder: string;
}

const Input = ({ title, placeholder }: inputProps) => {
	return (
		<div className="py-1 px-2 flex flex-col border-2 border-white bg-neutral-950">
			<p className="inter text-xs tracking-widest">{title}</p>
			<input
				className="bg-transparent inter tracking-wide focus:outline-0"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
