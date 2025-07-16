import Menu from "./Menu";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import type { SessionData } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import SignInLink from "./SignInLink";


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const Navbar = () => {
	const [session, setSession] = useState<SessionData | null>(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	}, [])


	return (
		<nav className="fixed top-0 w-full z-100 p-3 bg-nav">
			<div className="flex justify-between center-items">

				<Logo />

				<div className="mt-2">
					{session ? <Menu /> : <SignInLink />}
				</div>
			</div>


		</nav>
	)
}

export default Navbar;
