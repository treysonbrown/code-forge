import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const anonKey = import.meta.env.VITE_SUPABASE_KEY
const supaURL = import.meta.env.VITE_SUPABASE_URL

const supabase = createClient(supaURL, anonKey)


const { data, error } = await supabase.auth.getSession()

const LoginCard = () => {

	return (

		<>
			<div className='flex justify-center mt-30'>

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

				/>

			</div>


			{
				console.log(data.session?.user.email)
			}

			<p>{data.session?.user.email}  </p>
		</>

	)
}

export default LoginCard;
