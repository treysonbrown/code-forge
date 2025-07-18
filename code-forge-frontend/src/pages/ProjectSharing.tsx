import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProblemCard from "../components/ProblemCard";
import { supabaseClient } from "../config/supabase-clients";
import ProblemModal from "../components/ProblemModal";


type project = {
	id: number;
	course_id: number;
	title: string;
	description: string;
	likes: number;
	project_user: string;
}


const supabase = supabaseClient



const PracticeFeed: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState<project[]>([]);
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

		const fetchprojects = async () => {
			setLoading(true)
			const { data, error } = await supabaseClient
				.from('project')
				.select('*')
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
		fetchprojects()

	}, [])



	if (teacher) {
		return (
			<>
				<Header whiteText="PROJECT" blueText="SHARE" />

				<div className="ml-[5%] mr-[5%]">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{data.map((project) => (
							<>
								<ProblemCard title={project.title} diffuculty={project.description} />
							</>

						))}
					</div>
				</div>
			</>
		)
	} else if (!teacher) {
		return (
			<>
				<Header whiteText="PRACTICE" blueText="FEED" />

				<div className="ml-[5%] mr-[5%]">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{data.map((project) => (
							<>
								<ProblemCard title={project.title} diffuculty={project.description} />
							</>

						))}
					</div>
				</div>
			</>

		)
	}
}

export default PracticeFeed;
