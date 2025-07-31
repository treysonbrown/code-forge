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



const ProjectSharing: React.FC = () => {
	const [projects, setProjects] = useState<Project[]>([])
	const storedCourseID = JSON.parse(localStorage.getItem('courseID'))

	const fetchProblems = async () => {
		const { data } = await supabaseClient
			.from('project')
			.select('*')
			.eq('course_id', storedCourseID)
			.order('id', { ascending: false })
		setProjects(data)
	}

	useEffect(() => {
		console.log(storedCourseID)
		fetchProblems(storedCourseID)
	}, [])





	return (
		<>
			<Header whiteText="PROJECT" blueText="SHARE" />

			<div className="flex flex-col justify-center mr-[5%] ml-[5%] mt-20 gap-10 mb-20">
				{projects.map((project, i) => (
					<Post title={project.title} description={project.description} project_user={project.project_user} likes={project.likes} course_id={storedCourseID} key={i} />
				))}
			</div>
			<ProjectModal onProjectChange={fetchProblems} />
		</>
	)
}

export default ProjectSharing;
