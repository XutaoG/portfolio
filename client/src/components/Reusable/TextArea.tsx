import { ComponentPropsWithoutRef } from "react";

interface textAreaProps extends ComponentPropsWithoutRef<"textarea"> {
	title: string;
	placeholder: string;
}

const TextArea = ({ title, placeholder, ...rest }: textAreaProps) => {
	return (
		<div className="py-1 px-2 flex flex-col border-2 border-white bg-neutral-950">
			<p className="inter text-xs tracking-widest">{title}</p>

			<textarea
				className="min-h-48 h-96 max-h-[500px] bg-transparent inter tracking-wide focus:outline-0"
				{...rest}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextArea;
