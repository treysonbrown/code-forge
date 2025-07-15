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
			</>
		)
	}
}

export default Landing;
