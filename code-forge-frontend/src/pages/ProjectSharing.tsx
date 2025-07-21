import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabaseClient } from "../config/supabase-clients";
import type { Project } from "@/types";
import Post from "@/components/Post";
import ProjectModal from "@/components/ProjectModal";




const supabase = supabaseClient



const PracticeFeed: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState<Project[]>([]);
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

		const fetchProjects = async () => {
			setLoading(true)
			const { data, error } = await supabaseClient
				.from('project')
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
		fetchProjects()

	}, [])



	return (
		<>
			<Header whiteText="PROJECT" blueText="SHARE" />

			<div className="flex flex-col justify-center mr-[5%] ml-[5%] mt-20 gap-10 mb-20">
				{data.map((project) => (
					<Post title={project.title} description={project.description} project_user={project.project_user} likes={project.likes} />
				))}
			</div>
			<ProjectModal />
		</>
	)
}

export default PracticeFeed;
