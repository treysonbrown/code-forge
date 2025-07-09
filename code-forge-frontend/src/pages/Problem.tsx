import HeaderWhite from "../components/HeaderWhite"
import type { AnswerProp } from "../types";


type ProblemProp = {
	name: string;
	diffuculty?: string;
	instructions: string;
	answers: AnswerProp[];


}

const Problem: React.FC<ProblemProp> = ({ name, diffuculty = "none", instructions, answers }) => {
	return (
		<div className="mt-40 ml-20">
			<HeaderWhite text={name} />
			<p className="text-accent ml-10 mt-5 font-alegreya  ">Diffuculty: {diffuculty} </p>
			<h1 className="flex justify-center font-alegreya  md:text-3xl lg:text-4xl text-white font-bold mt-10">Instructions</h1>
			<p className="flex justify-center text-white ml-10 mt-5 font-alegreya ">{instructions} </p>
		</div>
	)
}

export default Problem;
