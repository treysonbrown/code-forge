import { Link } from "react-router-dom";

const PersonalStatsCard: React.FC = () => {
	return (
		<Link to="stats">
			<div className="relative flex flex-col justify-center bg-gray hover:bg-hover transition-all duration-300 ease-in-out  rounded-3xl  overflow-hidden">
				<img src="../../src/assets/PersonalStats.png" height="80%" width="80%" className="w-full  mb-4" />

				<h1 className="absolute top-20 left-12 font-alegreya text-white  md:text-3xl lg:text-4xl font-bold">PERSONAL</h1>

				<h1 className="absolute top-1/2 right-10 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-local-accent font-bold">STATS</h1>
			</div>
		</Link>
	);
};

export default PersonalStatsCard;
