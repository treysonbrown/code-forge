import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabaseClient } from "@/config/supabase-clients";
import ResourceCard from "../components/ResourceCard";
import ResourceModal from "@/components/ResourceModal";
import { toast, ToastContainer } from "react-toastify";






type ResourceResponse = {
	title: string;
	description: string;
	link: string
}


const HelpfulResources = () => {
	const [errored, setErrored] = useState<boolean>(false)
	const [resources, setResources] = useState<ResourceResponse[]>([])

	const storedCourseID: any = JSON.parse(localStorage.getItem('courseID'))
	const storedTeacher: any = JSON.parse(localStorage.getItem('teacher'))



	const fetchResources = async () => {
		const { data } = await supabaseClient
			.from('resources')
			.select('*')
			.eq('course_id', storedCourseID)
			.order('id', { ascending: false })

		if (data && data.length > 0) {
			console.log("test")
			setResources(data)

		} else {
			setErrored(true)
		}
	}





	useEffect(() => {
		fetchResources()
	}, [])


	if (errored) {
		toast.error("Error loading resources", { position: "top-center" })
	}

	return (
		<>
			<ToastContainer />

			<div>
				<div>
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
				</div>
				{storedTeacher ? (
					<ResourceModal onResourceChange={fetchResources} />
				) : (
					<></>
				)

				}
			</div>
		</>
	)

}
export default HelpfulResources;
