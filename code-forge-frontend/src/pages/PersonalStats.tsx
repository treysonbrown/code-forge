import { supabaseClient } from "@/config/supabase-clients";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import SubWhiteHeader from "../components/SubWhiteHeader";
import { useEffect, useState } from "react";
import BlueHeader from "@/components/BlueHeader";

const supabase = supabaseClient

type StatType = {
	email: string;
	id: number;
	name: string;
	points: number;
	problems_solved: number;
}

const PersonalStats = () => {
	const [stats, setStats] = useState<StatType[] | null>([{
		name: "",
		email: "",
		id: 0,
		points: 0,
		problems_solved: 0
	}])




	useEffect(() => {

		const fetchUser = async () => {
			try {
				const { data: { user }, error } = await supabase.auth.getUser();

				if (error) {
					console.log(error)
				}
				if (user) {
					const fetchStats = async () => {
						const { data } = await supabaseClient
							.from('student')
							.select('*')
							.eq('email', user.email)
						setStats(data)
					}
					fetchStats()

				}

			} catch (err) {
				console.log('No')
			}
		}


		console.log(stats)

		fetchUser()

	}, [])

	return (
		<div>
			<Header whiteText="PERSONAL" blueText="STATS" />
			<div className="flex flex-col justify-center">
				<SubWhiteHeader text="POINTS" />
				<h1 className="flex text-shadow-lg justify-center mt-15 mr-5 text-local-accent text-3xl md:text-5xl lg:text-9xl font-bold font-aladin italic">{stats[0].points}</h1>

				<SubHeader whiteText="PROBLEMS" blueText="SOLVED" />
				<h1 className="flex text-shadow-lg justify-center mt-15 mr-5 text-local-accent text-3xl md:text-5xl lg:text-9xl font-bold font-aladin italic">{stats[0].problems_solved}</h1>
				<SubWhiteHeader text="BADGES" />
			</div>
		</div>
	)
}
export default PersonalStats;
