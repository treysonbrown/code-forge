import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabaseClient } from "@/config/supabase-clients";
import ResourceCard from "../components/ResourceCard";
import ResourceModal from "@/components/ResourceModal";
import { useLocalStorage } from "usehooks-ts";




const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { user } = data


type ResourceResponse = {
	title: string;
	description: string;
	link: string
}

const HelpfulResources = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);
	const [resources, setResources] = useState<ResourceResponse[]>([])

	const storedCourseID = JSON.parse(localStorage.getItem('courseID'))
	const storedTeacher = JSON.parse(localStorage.getItem('teacher'))



	const fetchResources = async (course_id: Number) => {
		setLoading(true)
		const { data, error } = await supabaseClient
			.from('resources')
			.select('*')
			.eq('course_id', course_id)
			.order('id', { ascending: false })

		if (error) {
			console.log(error)
		} else {
			console.log(data)
			setResources(data)
			setError(null)
			setLoading(false)
		}
	}





	useEffect(() => {
		console.log(storedCourseID)
		fetchResources(storedCourseID)
	}, [])


	if (storedTeacher) {
		return (
			<>
				<Header whiteText="HELPFUL" blueText="RESOURCES" />
				<div className="ml-[5%] mr-[5%] mt-20 mb-20">
					<div className="flex flex-col gap-5">
						{
							resources.map((resource) => {
								return <ResourceCard title={resource.title} description={resource.description} link={resource.link} />
							})
						}
					</div>
				</div>
				<ResourceModal />
			</>
		)
	} else if (!storedTeacher) {
		return (
			<>
				<Header whiteText="HELPFUL" blueText="RESOURCES" />
				<div className="ml-[5%] mr-[5%] mt-20 mb-20">
					<div className="flex flex-col gap-5">
						{
							resources.map((resource) => {
								return <ResourceCard title={resource.title} description={resource.description} link={resource.link} />
							})
						}
					</div>
				</div>
			</>
		)
	}

}
export default HelpfulResources;
