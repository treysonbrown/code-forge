const HelpfulResourcesCard: React.FC = () => {
	return (
		<div className="relative flex flex-col justify-center bg-gray hover:bg-hover  rounded-3xl p-4 overflow-hidden">
			<img src="../../src/assets/HelpfulResources.png" className="w-full mb-4" />

			<h1 className="absolute top-1/4 left-32 font-alegreya text-white  md:text-3xl lg:text-4xl font-bold">HELPFUL</h1>

			<h1 className="absolute top-1/2 right-10 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-accent font-bold">RESOURCES</h1>
		</div>
	);
};

export default HelpfulResourcesCard;
