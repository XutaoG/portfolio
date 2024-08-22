import { ComponentPropsWithoutRef } from "react";

interface textAreaProps extends ComponentPropsWithoutRef<"textarea"> {
	title: string;
	placeholder: string;
}

const TextArea = ({ title, placeholder, ...rest }: textAreaProps) => {
	return (
		<div className="p-1 px-2 md:py-2 flex flex-col md:gap-1 border-2 border-white/20 rounded-lg">
			<p className="inter text-xs tracking-widest">{title}</p>
			<textarea
				className="min-h-[165px] max-h-[165px] md:min-h-[426px] md:max-h-[426px] 
				bg-transparent inter tracking-wide focus:outline-0"
				{...rest}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextArea;
