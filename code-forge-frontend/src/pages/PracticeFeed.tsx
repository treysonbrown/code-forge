import React from "react";
import { useEffect, useState } from "react";
import ProblemCard from "../components/ProblemCard";
import { supabaseClient } from "../config/supabase-clients";
import NewQuestionDialog from "@/components/ProblemModal";
import { ToastContainer } from 'react-toastify';


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
	const storedCourseID = JSON.parse(localStorage.getItem('courseID'))
	const storedTeacher = JSON.parse(localStorage.getItem('teacher'))

	const fetchProblems = async (courseID: number) => {
		const { data } = await supabaseClient
			.from('problem')
			.select('*')
			.eq('course_id', courseID)
			.order('id', { ascending: false })
		setProblems(data)
	}

	useEffect(() => {
		fetchProblems(storedCourseID)
	}, [])

	return (
		<div className="mb-10">
			<ToastContainer />
			<p className="flex justify-center mt-40 text-white text-sm md:text-base lg:text-xl font-bold">{practiceFeedDesc} </p>
			<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 mr-[5%] ml-[5%] gap-10">
					{
						problems.map((problem: Problem) => {
							return (
								<ProblemCard title={problem.question} diffuculty={problem.difficulty} description={problem.description} answer={problem.answer} id={problem.id} points={problem.points} />
							)
						})

					}
				</div>
				{storedTeacher ? (
					<NewQuestionDialog />
				) : (
					<></>
				)

				}
			</div>
		</div>
	)



}
export default PracticeFeed;
