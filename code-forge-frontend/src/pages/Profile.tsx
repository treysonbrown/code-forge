import { createClient } from '@supabase/supabase-js'
import WhiteHeader from '../components/WhiteHeader'
import SubWhiteHeader from '../components/SubWhiteHeader'

const anonKey = import.meta.env.VITE_SUPABASE_KEY
const supaURL = import.meta.env.VITE_SUPABASE_URL

const supabase = createClient(supaURL, anonKey)


const { data, error } = await supabase.auth.getSession()

const Profile = () => {

	return (

		<>


			{
				console.log(data.session?.user.email)
			}

			<SubWhiteHeader text={data.session?.user.email} || "Not logged in"/>
		</>

	)
}

export default Profile;
