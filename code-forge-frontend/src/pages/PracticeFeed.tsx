import React from "react";
import { useEffect, useState } from "react";
import ProblemCard from "../components/ProblemCard";
import { supabaseClient } from "../config/supabase-clients";

const practiceFeedDesc: string = "Select a problem that aligns with your interests and skill level. Detailed instructions are provided within each problem."

type Problem = {
	question: string;
	description: string;
	answer: string;
	difficulty: string;
	course_id: number;
	points: number;
	id: number;
}


const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { session, user } = data

const PracticeFeed: React.FC = () => {
	const [teacher, setTeacher] = useState()
	const [teacherData, setTeacherData] = useState()
	const [courseID, setCourseID] = useState()
	const [problems, setProblems] = useState<Problem[]>([])


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

				}

			} catch (err) {
				console.log('No')
			}
		}
		fetchUser()


		const fetchCourse = async () => {

			if (teacher) {
				const fetchCourseTeacher = async () => {
					const { data } = await supabaseClient
						.from('teacher')
						.select('id')
						.eq('email', user?.email)
					setCourseID(data[0].id)
				}
				fetchCourseTeacher()
			} else {
				const fetchCourseStudent = async () => {
					const { data } = await supabaseClient
						.from('student')
						.select('course_id')
						.eq('email', user?.email)
					setCourseID(data[0].course_id)
				}
				fetchCourseStudent()
			}
		}
		fetchCourse()


		const fetchProblems = async () => {
			const { data } = await supabaseClient
				.from('problem')
				.select('*')
				.eq('course_id', courseID)
			setProblems(data[0])
		}




	}, [])










	if (teacher) {
		console.log(problems)
		return (

			<h1 className="mt-40">Teacher</h1>

		)
	} else {
		console.log(teacherData)
		console.log(user)
		return (

			<h1 className="mt-40">Student</h1>
		)
	}




}
export default PracticeFeed;
