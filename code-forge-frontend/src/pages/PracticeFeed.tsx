import React from "react";
import { useEffect, useState } from "react";
import ProblemCard from "../components/ProblemCard";
import { supabaseClient } from "../config/supabase-clients";
import NewQuestionDialog from "@/components/ProblemModal";


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


const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { user } = data





const PracticeFeed: React.FC = () => {
	const [teacher, setTeacher] = useState()
	const [problems, setProblems] = useState<Problem[]>([])





	const fetchProblems = async (id_course: Number) => {
		const { data } = await supabaseClient
			.from('problem')
			.select('*')
			.eq('course_id', id_course)
		setProblems(data)
	}

	const fetchIDTeacher = async () => {
		const { data, error } = await supabaseClient
			.from('course')
			.select('id')
			.eq('email', user?.email)
		if (error) {
			console.log(error)
		} else {
			console.log(data[0].id)
			fetchProblems(data[0].id)
		}
	}


	const fetchIDStudent = async () => {
		const { data } = await supabaseClient
			.from('student')
			.select('course_id')
			.eq('email', user?.email)
		if (error) {
			console.log(error)
		} else {
			console.log(data[0].course_id)
			fetchProblems(data[0].course_id)
		}
	}


	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data: { user }, error } = await supabase.auth.getUser();

				if (error) {
					console.log(error)
				}

				if (user) {
					const fetchRoles = async () => {
						const { data } = await supabaseClient
							.from('teacher')
							.select('name')
							.eq('email', user.email)
						setTeacher(data?.length)
					}
					fetchRoles()
				} if (teacher) {
					fetchIDTeacher()
				} else {
					fetchIDStudent()
				}

			} catch (err) {
				console.log('No')
			}
		}
		fetchUser()
	}, [])










	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-40 mr-[5%] ml-[5%] gap-10">
				{
					problems.map((problem: Problem) => {
						return (
							<ProblemCard title={problem.question} diffuculty={problem.difficulty} description={problem.description} answer={problem.answer} id={problem.id} points={problem.points} />
						)
					})

				}
			</div>
			{teacher ? (
				<NewQuestionDialog />
			) : (
				<></>
			)

			}
		</div>
	)



}
export default PracticeFeed;
