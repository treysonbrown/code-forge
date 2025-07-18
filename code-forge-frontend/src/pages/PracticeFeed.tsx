import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProblemCard from "../components/ProblemCard";
import { supabaseClient } from "../config/supabase-clients";
import ProblemModal from "../components/ProblemModal";
import { Footer } from "rsuite";

const practiceFeedDesc: string = "Select a problem that aligns with your interests and skill level. Detailed instructions are provided within each problem."

type Problem = {
	question: string;
	description: string;
	answers: string;
	difficulty: string;
	course_id: number;
	id: number;
}


const supabase = supabaseClient



const PracticeFeed: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState<Problem[]>([]);
	const [teacher, setTeacher] = useState<any>()


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

		const fetchProblems = async () => {
			setLoading(true)
			const { data, error } = await supabaseClient
				.from('problem')
				.select('*')
				.eq('course_id', 1234)
				.order('id', { ascending: false })

			if (error) {
				console.log(error)
			} else {
				console.log(data)
				setData(data)
				setError(null)
				setLoading(false)
			}
		}
		fetchProblems()

	}, [])



	if (teacher) {
		return (
			<>
				<Header whiteText="PRACTICE" blueText="FEED" />
				<p className="flex text-center ml-[20%] mr-[20%] align-items text-white m-15 font-alegreya md:text-xl lg:text-2xl">{practiceFeedDesc}</p>

				<div className="ml-[5%] mr-[5%]">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{data.map((problem) => (
							<>
								<ProblemCard title={problem.question} diffuculty={problem.difficulty} />
							</>

						))}
					</div>
				</div>
				<ProblemModal />
			</>
		)
	} else if (!teacher) {
		return (
			<>
				<Header whiteText="PRACTICE" blueText="FEED" />
				<p className="flex text-center ml-[20%] mr-[20%] align-items text-white m-15 font-alegreya md:text-xl lg:text-2xl">{practiceFeedDesc}</p>

				<div className="ml-[5%] mr-[5%]">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{data.map((problem) => (
							<>
								<ProblemCard title={problem.question} diffuculty={problem.difficulty} />
							</>

						))}
					</div>
				</div>
			</>

		)
	}
}

export default PracticeFeed;
