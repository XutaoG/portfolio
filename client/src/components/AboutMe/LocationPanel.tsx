const LocationPanel = () => {
	return (
		<div
			className="size-full grow flex rounded-md overflow-hidden 
			text-3xl anton-sc-regular md:text-4xl lg:text-6xl tracking-widest"
		>
			<div className="grow basis-0 bg-gray-800 flex justify-end items-center">
				<div className="min-w-[50%] bg-blue-500 text-white p-2 py-4">
					<p className="text-right hover:scale-y-125 transition-transform transform-gpu">
						ORLANDO
					</p>
				</div>
			</div>
			<div className="grow basis-0 bg-blue-500 flex justify-start items-center">
				<div className="min-w-[50%] bg-gray-800 text-blue-500 p-2 py-4">
					<p className="hover:scale-y-125 transition-transform transform-gpu">
						FLORIDA
					</p>
				</div>
			</div>
		</div>
	);
};

export default LocationPanel;
