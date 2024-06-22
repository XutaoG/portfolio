import { ComponentPropsWithoutRef } from "react";

interface textAreaProps extends ComponentPropsWithoutRef<"textarea"> {
	title: string;
	placeholder: string;
}

const TextArea = ({ title, placeholder, ...rest }: textAreaProps) => {
	return (
		<div
			className="py-1 px-2 flex flex-col rounded-md border border-neutral-400
			bg-white dark:bg-neutral-700"
		>
			<p className="crimson-text text-xs">{title}</p>

			<textarea
				className="min-h-48 h-96 max-h-[500px] bg-transparent crimson-text focus:outline-0"
				{...rest}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextArea;
