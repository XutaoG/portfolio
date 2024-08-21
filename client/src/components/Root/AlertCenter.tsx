import Alert from "../Reusable/Alert";
import { useAppSelector } from "../../hooks";

const AlertCenter = () => {
	const alerts = useAppSelector((state) => state.alerts.alerts);

	const renderedAlerts = alerts.map((alert, index) => {
		return <Alert alert={alert} key={index} textStyle={alert.textStyle} />;
	});

	return (
		<div className="absolute right-2 top-16 z-40 flex flex-col gap-4">
			{renderedAlerts}
		</div>
	);
};

export default AlertCenter;
