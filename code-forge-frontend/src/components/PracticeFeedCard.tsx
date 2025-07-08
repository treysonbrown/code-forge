const PracticeFeedCard: React.FC = () => {
	return (
		<div className="relative flex flex-col justify-center bg-gray hover:bg-hover  rounded-3xl p-4 overflow-hidden">
			<img src="../../src/assets/PracticeFeed.png" className="w-full mb-4" />

			<h1 className="absolute top-3/4 right-50 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-white font-bold">PERSONAL</h1>
			<h1 className="absolute top-3/4 right-15 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-accent font-bold">STATS</h1>

		</div>
	);
};

export default PracticeFeedCard;
