import { supabaseClient } from "@/config/supabase-clients";
import RunnerUp from "../components/RunnerUp";
import WhiteHeader from "../components/WhiteHeader";
import { useEffect, useState } from "react";
import type { Student } from "@/types";


const Leaderboard = () => {

	const [results, setResults] = useState<Student[] | null | undefined>([])



	useEffect(() => {

		const fetchLeaders = async () => {
			const { data, error } = await supabaseClient
				.from('student')
				.select('*')
				.order('points', { ascending: false })

			if (error) {
				console.log(error)
			} else {
				console.log(data)
				setResults(data)
			}
		}
		fetchLeaders()
		console.log(results)

	}, [])


	return (
		<div className="flex flex-col" >
			<WhiteHeader text="LEADERBOARD" />
			<div className="flex justify-center">
				<img src="../../src/assets/Podium.svg" className="flex justify-center mt-20 w-[40%]" />
			</div>

			<div className="mt-10">
				{results?.map((result, i) => {
					const place: number = i + 1
					const bgColor: string = place % 2 === 0 ? "bg-runnerup" : "bg-local-primary"
					return (
						<RunnerUp username={result.name} place={place} points={result.points} bgColor={bgColor} key={i} />
					)
				})}
			</div>

		</div>
	)
}
export default Leaderboard;
