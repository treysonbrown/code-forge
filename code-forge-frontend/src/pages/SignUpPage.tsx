import { createClient } from '@supabase/supabase-js'
import LoginCard from '@/components/LoginCard'
import RegristrationForm from '@/components/RegristrationForm'

const anonKey = import.meta.env.VITE_SUPABASE_KEY
const supaURL = import.meta.env.VITE_SUPABASE_URL

const supabase = createClient(supaURL, anonKey)


const { data } = await supabase.auth.getSession()

const SignUpPage = () => {

	return (

		<>
			<div className='flex justify-center mt-40'>
				<RegristrationForm />


			</div>

		</>

	)
}

export default SignUpPage;
