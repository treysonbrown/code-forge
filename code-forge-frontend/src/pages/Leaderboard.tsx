import RunnerUp from "../components/RunnerUp";

type RunnerUp = {
	place: number;
	username: string;
};

const runnerUps: RunnerUp[] = [
	{ place: 4, username: "coolcoder42" },
	{ place: 5, username: "devpro" },
	{ place: 6, username: "coder123" },
	{ place: 7, username: "coder456" },
	{ place: 8, username: "coder789" },
	{ place: 9, username: "coder101" },
	{ place: 10, username: "coder123" },

];

const Leaderboard = () => {

	return (
		<div className="flex flex-col" >
			<h1 className="flex justify-center mt-30 text-white text-3xl md:text-5xl lg:text-6xl font-bold">LEADERBOARD</h1>
			<div className="flex justify-center">
				<img src="../../src/assets/Podium.svg" className="flex justify-center mt-20 w-[40%]" />
			</div>

			<div className="mt-10">
				{runnerUps.map((runnerUp, i) => {
					const bgColor: string = runnerUp.place % 2 == 0 ? "bg-runnerup" : "bg-primary"
					return (
						<RunnerUp username={runnerUp.username} place={runnerUp.place} bgColor={bgColor} key={i} />
					)
				})}
			</div>

		</div>
	)
}
export default Leaderboard;
