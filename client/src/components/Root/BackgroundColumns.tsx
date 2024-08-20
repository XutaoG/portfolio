const BackgroundColumns = () => {
	const column = (
		<div className="flex gap-4">
			<div className="h-full w-[1px] bg-gradient-to-b from-white/15 to-transparent to-50%" />
			<div className="h-full w-[1px] bg-gradient-to-b from-white/15 to-transparent to-50%" />
		</div>
	);

	return (
		<div className="absolute w-full h-full flex justify-evenly z-10">
			{column}
			{column}
			{/* {column} */}
		</div>
	);
};

export default BackgroundColumns;
