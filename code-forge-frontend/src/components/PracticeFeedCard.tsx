import { Link } from "react-router-dom";

const PracticeFeedCard: React.FC = () => {
	return (
		<Link to="/practicefeed">
			<div className="relative flex flex-col justify-center bg-gray hover:bg-hover transition-all duration-300 ease-in-out rounded-3xl p-4 overflow-hidden">
				<img src="../../src/assets/PracticeFeed.png" className="w-full  mb-4" />
				<h1 className="absolute top-3/4 right-50 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-white font-bold">PRACTICE</h1>
				<h1 className="absolute top-3/4 right-15 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-local-accent font-bold">FEED</h1>
			</div>
		</Link>
	);
};

export default PracticeFeedCard;
