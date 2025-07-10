import type { RunnerUpProps } from "../types";

const RunnerUp: React.FC<RunnerUpProps> = ({ place, username, bgColor }) => {
	return (
		<div className={`${bgColor}`}>
			<div className="flex">
				<p className="ml-10 flex text-center align-items text-white font-alegreya md:text-xl lg:text-2xl">{place}.</p>
				<p className="ml-5 flex text-center align-items text-white font-alegreya md:text-xl lg:text-2xl"> {username}</p>
			</div>
		</div>

	)
}
export default RunnerUp;
