import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import type { SessionData } from 'react-router-dom'


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export default function Profile() {
	const [session, setSession] = useState<SessionData | null>(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})

		return () => subscription.unsubscribe()
	}, [])

	if (!session) {
		return (<div className='mt-40'>not logged in</div>)
	}
	else {
		return (<div className='mt-40'>Logged in!</div>)
	}
}
