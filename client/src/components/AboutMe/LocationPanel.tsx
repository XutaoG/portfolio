const LocationPanel = () => {
	return (
		<div className="grow flex h-full rounded-md overflow-hidden">
			<div className="grow basis-0 bg-white flex justify-end items-center">
				<p className="anton-sc-regular text-6xl tracking-widest bg-blue-600 p-4">
					ORLANDO
				</p>
			</div>
			<div className="grow basis-0 bg-blue-600 flex justify-start items-center">
				<p className="anton-sc-regular text-6xl tracking-widest bg-white text-blue-600 p-4">
					FLORIDA
				</p>
			</div>
		</div>
	);
};

export default LocationPanel;
