interface inputProps {
	title: string;
	placeholder: string;
}

const Input = ({ title, placeholder }: inputProps) => {
	return (
		<div className="p-1 px-2 md:py-2 flex flex-col md:gap-1 border-2 border-white/20 rounded-lg">
			<p className="inter text-xs tracking-widest">{title}</p>
			<input
				className="bg-transparent inter tracking-wide focus:outline-0"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
