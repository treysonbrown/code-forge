import { supabaseClient } from "@/config/supabase-clients";
import RunnerUp from "../components/RunnerUp";
import WhiteHeader from "../components/WhiteHeader";
import { useEffect, useState } from "react";
import type { Student } from "@/types";
import Podium from "@/components/Podium";


const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { user } = data



const Leaderboard = () => {

	const [results, setResults] = useState<Student[] | null | undefined>([])
	const [podium, setPodium] = useState(["First", "Second", "Third"])
	const [teacher, setTeacher] = useState()


	const fetchStudents = async (course_id: Number) => {
		const { data, error } = await supabaseClient
			.from('student')
			.select('*')
			.eq('course_id', course_id)
			.order('points', { ascending: false })

		if (error) {
			console.log(error)
		} else {
			console.log(data)
			setResults(data)
		}
		if (data?.length >= 3) {
			setPodium([data[0].name, data[1].name, data[2].name])
		}
	}


	const fetchIDTeacher = async () => {
		const { data, error } = await supabaseClient
			.from('course')
			.select('id')
			.eq('email', user?.email)
		if (error) {
			console.log(error)
		} else {
			fetchStudents(data[0].id)
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
			fetchStudents(data[0].course_id)
		}
	}


	useEffect(() => {

		const fetchLeader = async () => {
			try {
				const { data: { user }, error } = await supabase.auth.getUser();
				if (error) {
					console.log(error)
				}
				const fetchRoles = async () => {
					const { data, error } = await supabaseClient
						.from('teacher')
						.select('name')
						.eq('email', user.email)
					if (error) {
						console.log(error)
					} else {
						setTeacher(data?.length)
					}
				}
				fetchRoles()
				if (teacher) {
					fetchIDTeacher()
				} else {
					fetchIDStudent()
				}

			} catch (err) {
				console.log('No')
			}

		}

		fetchLeader()




		console.log(results)

	}, [])





	return (
		<div className="flex flex-col" >
			<WhiteHeader text="LEADERBOARD" />
			<div className="mb-10">

				<Podium first={podium[0]} second={podium[1]} third={podium[2]} />

				{results?.map((result, i) => {
					const place: number = i + 1
					if (place > 3) {
						const bgColor: string = place % 2 === 0 ? "bg-runnerup" : "bg-local-primary"
						return (
							<RunnerUp username={result.name} place={place} points={result.points} bgColor={bgColor} key={i} />
						)
					}
				})}
			</div>

		</div>
	)
}
export default Leaderboard;
