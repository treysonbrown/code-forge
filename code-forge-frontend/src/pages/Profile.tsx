import BlueHeader from "@/components/BlueHeader";
import Footer from "@/components/Footer";
import GrayButton from "@/components/GrayButton";
import WhiteHeader from "@/components/WhiteHeader";
import { supabaseClient } from "@/config/supabase-clients";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";


const supabase = supabaseClient

type StatType = {
	email: string;
	name: string;
	points: number;
	problems_solved: number;
}



const Profile = () => {

	const [name, setName] = useState("")
	const [stats, setStats] = useState<StatType[] | null>([{
		name: "",
		email: "",
		points: 0,
		problems_solved: 0
	}])




	useEffect(() => {

		const fetchUser = async () => {
			try {
				const { data: { user }, error } = await supabase.auth.getUser();

				if (error) {
					console.log(error)
				}
				if (user) {
					const fetchStats = async () => {
						const { data } = await supabaseClient
							.from('student')
							.select('*')
							.eq('email', user.email)
						setStats(data)
						setName(data[0].name)
					}
					fetchStats()

				}

			} catch (err) {
				console.log('No')
			}
		}



		fetchUser()

	}, [])


	return (
		<>
			<WhiteHeader text={name} />
			<div className="flex justify-center flex-col gap-5 m-22">
				<GrayButton buttonText="Personal Stats" linkTo="/stats" />
				<GrayButton buttonText="Settings" linkTo="/settings" />
				<GrayButton buttonText="Class info" linkTo="/class" />

				<button className="flex flex-start ml-30 text-local-accent hover:underline text-4xl" onClick={() => supabase.auth.signOut()}>Sign out</button>

			</div>
			<Footer />
		</>


	)


}

export default Profile;





