import { Link } from "react-router-dom";

const HelpfulResourcesCard: React.FC = () => {
	return (
		<Link to="/resources">
			<div className="relative flex flex-col justify-center bg-gray hover:bg-hover transition-all duration-300 ease-in-out rounded-3xl p-4 overflow-hidden">
				<img src="../../src/assets/HelpfulResources.png" className="w-full mb-4" />

				<h1 className="absolute top-1/4 left-32 font-alegreya text-white  md:text-3xl lg:text-4xl font-bold">HELPFUL</h1>

				<h1 className="absolute top-1/2 right-10 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-local-accent font-bold">RESOURCES</h1>
			</div>
		</Link>
	);
};

export default HelpfulResourcesCard;
