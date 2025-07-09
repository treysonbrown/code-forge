import { Link } from "react-router-dom";

const LeaderBoardCard: React.FC = () => {
	return (
		<Link to="/leaderboard">
			<div className="relative flex flex-col justify-center bg-gray hover:bg-hover  rounded-3xl p-4 overflow-hidden">
				<img src="../../src/assets/LeaderBoard.png" className="w-full mb-4" />

				<h1 className="absolute top-20 left-12 font-alegreya text-white  md:text-3xl lg:text-4xl font-bold">LEADER</h1>

				<h1 className="absolute top-2/3 right-10 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-accent font-bold">BOARD</h1>
			</div>
		</Link>
	);
};

export default LeaderBoardCard;
