import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabaseClient } from "../config/supabase-clients";
import type { Project } from "@/types";
import Post from "@/components/Post";
import ProjectModal from "@/components/ProjectModal";




const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { user } = data



const PracticeFeed: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState<Project[]>([]);
	const storedCourseID = JSON.parse(localStorage.getItem('courseID'))



	const fetchProjects = async (course_id: Number) => {
		setLoading(true)
		const { data, error } = await supabaseClient
			.from('project')
			.select('*')
			.eq('course_id', course_id)
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

	useEffect(() => {
		fetchProjects(storedCourseID)
	})




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
