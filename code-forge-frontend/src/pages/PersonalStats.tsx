import { supabaseClient } from "@/config/supabase-clients";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import SubWhiteHeader from "../components/SubWhiteHeader";
import { useEffect, useState } from "react";
import SubBlueHeader from "@/components/SubBlueHeader";
import { toast } from "react-toastify";

const supabase = supabaseClient

type StatType = {
	email: string;
	name: string;
	points: number;
	problems_solved: number;
}

type TeacherStatType = {
	name: string;
	email: string;
}

const PersonalStats = () => {
	const storedTeacher = JSON.parse(localStorage.getItem('teacher'))

	const [errored, setErrored] = useState<boolean>(false)
	const [stats, setStats] = useState<StatType | TeacherStatType | null>({
		name: "",
		email: "",
		points: 0,
		problems_solved: 0
	})

	const studentStats = async (email: string) => {
		const { data, error } = await supabase
			.from('student')
			.select('*')
			.eq('email', email)
		console.log(email)
		if (data && data.length > 0) {
			console.log(data)
			setStats(data[0])
		} else {
			console.log(error)
		}
	}

	const teacherStats = async (email: string) => {
		const { data } = await supabase
			.from('teacher')
			.select('*')
			.eq('email', email)
		if (data && data.length > 0) {
			console.log(data)
			console.log(data)
			setStats(data[0])
		} else {
			setErrored(true)
		}
	}


	useEffect(() => {
		console.log(storedTeacher)
		const fetchUser = async () => {
			try {
				const { data: { user }, error } = await supabase.auth.getUser();

				if (error) {
					console.log(error)
				}
				if (user) {
					if (!storedTeacher) {
						studentStats(user.email)
					} else {

						teacherStats(user.email)
					}
				}
			}
			catch (err) {
				console.log(err)
			}
		}
		fetchUser()

	}, [])


	if (errored) {
		toast.error("Error loading stats", { position: "top-center" })
	}



	if (!storedTeacher) {
		return (
			<div>
				<Header whiteText="PERSONAL" blueText="STATS" />
				<div className="flex flex-col justify-center">
					<SubWhiteHeader text="POINTS" />
					<h1 className="flex text-shadow-lg justify-center mt-15 mr-5 text-local-accent text-3xl md:text-5xl lg:text-9xl font-bold font-aladin italic">{stats?.points}</h1>

					<SubHeader whiteText="PROBLEMS" blueText="SOLVED" />
					<h1 className="flex text-shadow-lg justify-center mt-15 mr-5 text-local-accent text-3xl md:text-5xl lg:text-9xl font-bold font-aladin italic">{stats?.problems_solved}</h1>
					<SubWhiteHeader text="BADGES" />
				</div>
			</div>
		)
	} else {
		return (
			<>
				<Header whiteText="TEACHER" blueText="STATS" />

				<SubWhiteHeader text="NAME" />
				<SubBlueHeader text={stats?.name} />
				<SubWhiteHeader text="EMAIL" />
				<SubBlueHeader text={stats?.email} />

			</>

		)
	}
}
export default PersonalStats;
