import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearAlert } from "../../store/slices/alertSlice";
import { useEffect, useState } from "react";

const AlertCenter = () => {
	const alert = useAppSelector((state) => state.alerts.alert);
	const dispatch = useAppDispatch();

	const [timer, setTimer] = useState(alert && alert.expireTimer);

	useEffect(() => {
		if (alert == null) {
			return;
		}
		setTimer(alert.expireTimer);
	}, [alert]);

	useEffect(() => {
		if (timer == null) {
			return;
		}

		const interval = setInterval(() => {
			setTimer((val) => val! - 100);
		}, 100);

		if (timer <= 0) {
			dispatch(clearAlert());
			setTimer(null);
			return () => clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [dispatch, timer]);

	const onRemoveClick = () => {
		dispatch(clearAlert());
	};

	return (
		<div className="absolute right-2 top-16 z-40 flex flex-col gap-4">
			<div
				className={`w-72 h-24 rounded-sm p-0.5
					bg-gradient-to-r from-blue-600 to-purple-600
					inter tracking-wider 
					rounded-bl-3xl rounded-tr-3xl translate-x-96 ${
						timer && "transform-none"
					} transition-transform duration-500`}
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
							onClick={onRemoveClick}
						/>
						<p className="w-8 self-start text-sm text-white/20">
							{timer && (timer / 1000).toFixed(1)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AlertCenter;
