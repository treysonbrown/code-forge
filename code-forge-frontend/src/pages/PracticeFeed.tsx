import Footer from "../components/Footer";
import ProblemCard from "../components/ProblemCard";

const practiceFeedDesc: string = "Select a problem that aligns with your interests and skill level. Detailed instructions are provided within each problem."

type Problems = {
	title: string;
	difficulty: string;
}

const problems: Problems[] = [
	{ title: "TWO SUM", difficulty: "EASY" },
	{ title: "REVERSE LINKED LIST", difficulty: "EASY" },
	{ title: "VALID PALINDROME", difficulty: "EASY" },
	{ title: "MERGE TWO SORTED LISTS", difficulty: "EASY" },
	{ title: "LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS", difficulty: "MEDIUM" },
	{ title: "GROUP ANAGRAMS", difficulty: "MEDIUM" },
	{ title: "BINARY TREE ZIGZAG LEVEL ORDER TRAVERSAL", difficulty: "MEDIUM" },
	{ title: "MAXIMUM SUBARRAY", difficulty: "MEDIUM" },
	{ title: "WORD LADDER", difficulty: "HARD" },
	{ title: "MERGE K SORTED LISTS", difficulty: "HARD" },
	{ title: "N QUEENS", difficulty: "HARD" },
	{ title: "REGULAR EXPRESSION MATCHING", difficulty: "HARD" }
];


const PracticeFeed: React.FC = () => {
	return (
		<div className="flex justify-center flex-col">
			<div className="flex justify-center mt-40 gap-2">
				<h1 className="font-alegreya  text-3xl md:text-5xl lg:text-6xl text-white font-bold ">PRACTICE</h1>
				<h1 className="font-alegreya  text-3xl md:text-5xl lg:text-6xl text-accent font-bold ">FEED</h1>
			</div>
			<p className="flex text-center ml-[20%] mr-[20%] align-items text-white m-15 font-alegreya md:text-xl lg:text-2xl">{practiceFeedDesc}</p>

			<div className="ml-[5%] mr-[5%]">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{problems.map((problem) => (
						<ProblemCard title={problem.title} diffuculty={problem.difficulty} />
					))}
				</div>
			</div>
			<div className="pt-4">
				<Footer />
			</div>
		</div>


	)
}
export default PracticeFeed;
