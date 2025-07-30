import { supabaseClient } from "@/config/supabase-clients";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import SubWhiteHeader from "../components/SubWhiteHeader";
import { useEffect, useState } from "react";
import SubBlueHeader from "@/components/SubBlueHeader";

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

	const [stats, setStats] = useState<StatType | TeacherStatType | null>({
		name: "",
		email: "",
		points: 0,
		problems_solved: 0
	})

	const studentStats = async () => {
		const { data } = await supabase
			.from('student')
			.select('*')
			.eq('email', '26browntrel@washk12.org')
		if (data && data.length > 0) {
			console.log(data)
			setStats(data[0])
		}
	}

	const teacherStats = async () => {
		const { data } = await supabase
			.from('teacher')
			.select('*')
			.eq('email', 'tr3ysonb@gmail.com')
		if (data && data.length > 0) {
			console.log(data)
			setStats(data[0])
		}
	}


	useEffect(() => {
		if (!storedTeacher) {
			studentStats()
		} else {
			teacherStats()
		}
	}, [])





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
