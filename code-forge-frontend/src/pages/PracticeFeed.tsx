import React from "react";
import { useEffect, useState } from "react";
import ProblemCard from "../components/ProblemCard";
import { supabaseClient } from "../config/supabase-clients";
import NewQuestionDialog from "@/components/ProblemModal";
import { toast, ToastContainer } from 'react-toastify';
import Header from "../components/Header";


const practiceFeedDesc: string = "Select a problem that aligns with your interests and skill level. Detailed instructions are provided within each problem."

type Problem = {
	answer: string;
	correct: boolean;
	course_id: number;
	description: string;
	difficulty: string;
	id: number;
	points: number;
	question: string;
}

const PracticeFeed: React.FC = () => {
	const [problems, setProblems] = useState<Problem[]>([])
	const [errored, setErrored] = useState(false)
	const storedCourseID = JSON.parse(localStorage.getItem('courseID'))
	const storedTeacher = JSON.parse(localStorage.getItem('teacher'))

	const fetchProblems = async (courseID: number) => {
		const { error, data } = await supabaseClient
			.from('problem')
			.select('*')
			.eq('course_id', courseID)
			.order('id', { ascending: false })
		if (data) {
			setProblems(data)

		} else if (error) {
			setErrored(true)
		}
	}

	useEffect(() => {
		console.log(storedCourseID)
		fetchProblems(storedCourseID)
	}, [])

	if (errored) {
		toast.error("Error loading problems", { position: "top-center" })
	}

	return (
		<div className="mb-10">
			<ToastContainer />
			<Header whiteText="PRACTICE" blueText="FEED" />
			<p className="flex justify-center text-white text-sm md:text-base lg:text-xl font-bold">{practiceFeedDesc} </p>
			<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 mr-[5%] ml-[5%] gap-10">
					{
						problems && problems.map((problem: Problem, i: number) => {
							return (
								<ProblemCard title={problem.question} diffuculty={problem.difficulty} description={problem.description} answer={problem.answer} id={problem.id} points={problem.points} key={i} />
							)
						})

					}
				</div>
				{storedTeacher ? (
					<NewQuestionDialog onQuestionAdded={() => fetchProblems(storedCourseID)} />
				) : (
					<></>
				)

				}
			</div>
		</div>
	)



}
export default PracticeFeed;
