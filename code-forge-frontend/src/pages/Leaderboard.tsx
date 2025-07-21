import { supabaseClient } from "@/config/supabase-clients";
import RunnerUp from "../components/RunnerUp";
import WhiteHeader from "../components/WhiteHeader";
import { useEffect, useState } from "react";
import type { Student } from "@/types";
import Podium from "@/components/Podium";


const Leaderboard = () => {

	const [results, setResults] = useState<Student[] | null | undefined>([])
	const [podium, setPodium] = useState(["First", "Second", "Third"])



	useEffect(() => {

		const fetchLeaders = async () => {
			const { data, error } = await supabaseClient
				.from('student')
				.select('*')
				.eq('course_id', 1234)
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
		fetchLeaders()



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
