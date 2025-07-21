import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabaseClient } from "@/config/supabase-clients";
import ResourceCard from "../components/ResourceCard";
import ResourceModal from "@/components/ResourceModal";




const supabase = supabaseClient


type ResourceResponse = {
	title: string;
	description: string;
	link: string
}

const HelpfulResources = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);
	const [resources, setResources] = useState<ResourceResponse[]>([])
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

		const fetchResources = async () => {
			setLoading(true)
			const { data, error } = await supabaseClient
				.from('resources')
				.select('*')
				.eq('course_id', 1234)
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
		fetchResources()

	}, [])

	if (teacher) {
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
	} else if (!teacher) {
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
