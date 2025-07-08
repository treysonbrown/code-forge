const PersonalStatsCard: React.FC = () => {
	return (
		<div className="relative flex flex-col justify-center bg-gray hover:bg-hover  rounded-3xl p-4 overflow-hidden">
			<img src="../../src/assets/PersonalStats.png" className="w-full mb-4" />

			<h1 className="absolute top-20 left-12 font-alegreya text-white  md:text-3xl lg:text-4xl font-bold">PERSONAL</h1>

			<h1 className="absolute top-1/2 right-10 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-accent font-bold">STATS</h1>
		</div>
	);
};

export default PersonalStatsCard;
