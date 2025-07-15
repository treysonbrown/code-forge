import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Home from '../components/Home'
import About from './About'
import type { SessionData } from 'react-router-dom'


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const Landing = () => {
	const [session, setSession] = useState<SessionData | null>(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	}, [])



	if (!session) {
		return (
			<About />
		)
	}
	else {
		return (
			<>
				<Home />
				<button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => supabase.auth.signOut()}>Log out</button>
			</>
		)
	}
}

export default Landing;
