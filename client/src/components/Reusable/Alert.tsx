import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { AlertObj } from "../../models/alert";
import { useAppDispatch } from "../../hooks";
import { removeAlert } from "../../store/slices/alertSlice";

interface AlertProps {
	alert: AlertObj;
	textStyle?: string;
}

const Alert = ({ alert, textStyle }: AlertProps) => {
	const [timer, setTimer] = useState(alert.expireTimer);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (timer <= 0) {
			dispatch(removeAlert(alert));
			return;
		}

		const interval = setInterval(() => {
			setTimer((val) => val! - 100);
		}, 100);

		return () => clearInterval(interval);
	}, [alert, dispatch, timer]);

	const onRemoveClick = () => {
		dispatch(removeAlert(alert));
	};

	return (
		<div
			className="w-72 min-h-24 rounded-sm p-2 bg-black/90 border border-white/10 
			inter tracking-wider flex justify-between gap-2
			rounded-bl-3xl rounded-tr-3xl relative"
		>
			<div className="grow flex flex-col gap-1">
				<div
					className="absolute inset-0 rounded-bl-3xl rounded-tr-3xl
				bg-gradient-to-r from-blue-600/70 to-purple-600/70 blur-sm -z-50"
				/>
				<p className="text-xs tracking-normal">For you</p>
				<p className={textStyle}>{alert.message}</p>
			</div>
			<div className="flex flex-col justify-between">
				<MdClose
					className="self-end text-xl hover:cursor-pointer"
					onClick={onRemoveClick}
				/>
				<p className="self-start text-sm text-white/20">
					{timer && (timer / 1000).toFixed(1)}
				</p>
			</div>
		</div>
	);
};

export default Alert;
