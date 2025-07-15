import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Link } from 'react-router-dom'

const anonKey = import.meta.env.VITE_SUPABASE_KEY
const supaURL = import.meta.env.VITE_SUPABASE_URL

const supabase = createClient(supaURL, anonKey)


const { data } = await supabase.auth.getSession()

const SignUpPage = () => {

	return (

		<>

			<div className='flex'>

				<img src='../../src/assets/Login.png' width="70%" />
				<div className='flex flex-col justify-center mt-30'>
					<div className='flex flex-col justify-center mt-30 '>
						<Auth
							supabaseClient={supabase}
							appearance={{
								theme: ThemeSupa,
								variables: {
									default: {
										colors: {
											brand: '#000000',
											brandAccent: '#111111',
										},
									}
								}
							}}


							providers={['google']}
							view='sign_up'
							showLinks={false}

						/>

						<Link to="/login">
							<p className='flex justify-center text-link text-sm underline hover:text-link-hover'>Aleady have an account? Sign in</p>
						</Link>
					</div>
				</div>
			</div>


		</>

	)
}

export default SignUpPage;
