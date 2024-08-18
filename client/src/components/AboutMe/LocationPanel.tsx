const LocationPanel = () => {
	return (
		<div className="size-full grow flex rounded-md overflow-hidden text-3xl md:text-4xl lg:text-6xl">
			<div className="grow basis-0 bg-gray-800 flex justify-end items-center">
				<div className="bg-blue-500 text-white p-2 py-4">
					<p className="anton-sc-regular tracking-widest hover:scale-y-125 transition-transform transform-gpu">
						ORLANDO
					</p>
				</div>
			</div>
			<div className="grow basis-0 bg-blue-500 flex justify-start items-center">
				<div className="bg-gray-800 text-blue-500 p-2 py-4">
					<p className="anton-sc-regular tracking-widest hover:scale-y-125 transition-transform transform-gpu">
						FLORIDA
					</p>
				</div>
			</div>
		</div>
	);
};

export default LocationPanel;
