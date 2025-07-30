import { supabaseClient } from "@/config/supabase-clients";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import SubWhiteHeader from "../components/SubWhiteHeader";
import { useEffect, useState } from "react";

const supabase = supabaseClient

type StatType = {
	email: string;
	name: string;
	points: number;
	problems_solved: number;
}

const PersonalStats = () => {
	const storedTeacher = JSON.parse(localStorage.getItem('teacher'))

	const [stats, setStats] = useState<StatType[] | null>([{
		name: "",
		email: "",
		points: 0,
		problems_solved: 0
	}])







	if (!storedTeacher) {
		return (
			<div>
				<Header whiteText="PERSONAL" blueText="STATS" />
				<div className="flex flex-col justify-center">
					<SubWhiteHeader text="POINTS" />
					<h1 className="flex text-shadow-lg justify-center mt-15 mr-5 text-local-accent text-3xl md:text-5xl lg:text-9xl font-bold font-aladin italic">{stats && stats[0].points}</h1>

					<SubHeader whiteText="PROBLEMS" blueText="SOLVED" />
					<h1 className="flex text-shadow-lg justify-center mt-15 mr-5 text-local-accent text-3xl md:text-5xl lg:text-9xl font-bold font-aladin italic">{stats && stats[0].problems_solved}</h1>
					<SubWhiteHeader text="BADGES" />
				</div>
			</div>
		)
	} else {
		return (
			<Header whiteText="TEACHER" blueText="STATS" />
		)
	}
}
export default PersonalStats;
