import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearAlert } from "../../store/slices/alertSlice";
import { useCallback, useEffect, useState } from "react";

const AlertCenter = () => {
	const alert = useAppSelector((state) => state.alerts.alert);
	const dispatch = useAppDispatch();

	const [timer, setTimer] = useState(alert && alert.expireTimer);
	const [isHidden, setIsHidden] = useState(true);

	const removeAlert = useCallback(() => {
		dispatch(clearAlert());
		setTimer(null);

		setTimeout(() => {
			setIsHidden(true);
		}, 200);
	}, [dispatch]);

	useEffect(() => {
		if (alert == null) {
			return;
		}

		setIsHidden(false);
		const timeout = setTimeout(() => {
			setTimer(alert.expireTimer);
		}, 50);

		return () => clearTimeout(timeout);
	}, [alert, removeAlert]);

	useEffect(() => {
		if (timer == null) {
			return;
		}

		const interval = setInterval(() => {
			setTimer((val) => val! - 100);
		}, 100);

		if (timer <= 0) {
			removeAlert();
		}

		return () => clearInterval(interval);
	}, [dispatch, removeAlert, timer]);

	return (
		<div
			className={`absolute w-72 h-24 right-2 top-16 z-40 flex flex-col gap-4 
			p-0.5 bg-gradient-to-r from-blue-600 to-purple-600 inter tracking-wider 
			rounded-bl-3xl rounded-tr-3xl translate-y-96 opacity-0 ${
				timer && "transform-none opacity-100"
			} ${isHidden && "hidden"} transition-all duration-200`}
		>
			<div
				className="h-full rounded-bl-3xl rounded-tr-3xl
					bg-neutral-950 flex justify-between gap-2 p-2"
			>
				<div className="grow flex flex-col gap-1">
					<p className="text-xs tracking-normal">For you</p>
					<p className={alert?.textStyle}>{alert?.message}</p>
				</div>
				<div className="flex flex-col justify-between">
					<MdClose
						className="self-end text-xl hover:cursor-pointer"
						onClick={removeAlert}
					/>
					<p className="w-8 self-start text-sm text-white/20">
						{timer && (timer / 1000).toFixed(1)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AlertCenter;
