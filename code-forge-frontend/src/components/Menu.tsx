import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const linkStyle: string = "text-white underline mt-30"

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

type NavObject = {
	name: string;
	link: string;
}

const Links: NavObject[] = [
	{ name: "Home", link: "/" },
	{ name: "Practice Feed", link: "/practicefeed" },
	{ name: "Project Sharing", link: "/projectsharing" },
	{ name: "Helpful Resources", link: "/resources" },
	{ name: "Personal Stats", link: "/" },
	{ name: "Home", link: "/" },
	{ name: "Home", link: "/" },
]

const Menu = () => {

	const [hidden, setHidden] = useState("hidden");

	let menuRef = useRef(null)

	const hiddenChange = () => {
		if (hidden == "hidden") {
			setHidden("")
		} else {
			setHidden("hidden")
		}
	}

	const signOut = () => {
		sessionStorage.removeItem('courseID')
		sessionStorage.removeItem('teacher')
		supabase.auth.signOut()
	}



	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (!menuRef.current?.contains(e.target)) {
				setHidden("hidden")
			}
		}
		document.addEventListener("mousedown", handler)
		return () => {
			document.removeEventListener("mousedown", handler)
		}

	}, []);




	return (

		<div ref={menuRef}>
			<button data-collapse-toggle="navbar-hamburger" type="button" onClick={hiddenChange} className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-local-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
				<span className="sr-only">Open main menu</span>
				<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
				</svg>
			</button>

			<div className={`${hidden} absolute top-15 right-0 z-1010 flex center-items `} id="navbar-hamburger">
				<ul className="flex flex-col font-medium mt-4  bg-menu  p-10">
					<h1 className="flex justify-center  text-white text-1xl md:text-2xl lg:text-3xl font-bold underline">Menu</h1>
					<li>
						<Link to="/" className={linkStyle} onClick={() => setHidden("hidden")}>Home</Link>
					</li>
					<li>
						<Link to="/practicefeed" className={linkStyle} onClick={() => setHidden("hidden")}>Practie Feed</Link>
					</li>
					<li>
						<Link to="/projectsharing" className={linkStyle} onClick={() => setHidden("hidden")}>Project Sharing</Link>
					</li>
					<li>
						<Link to="/resources" className={linkStyle} onClick={() => setHidden("hidden")}>Helpful Resources</Link>
					</li>
					<li>
						<Link to="/stats" className={linkStyle} onClick={() => setHidden("hidden")}>Personal Stats</Link>
					</li>
					<li>
						<Link to="/leaderboard" className={linkStyle} onClick={() => setHidden("hidden")}>Leaderboard</Link>
					</li>
					<li>
						<Link to="/profile" className={linkStyle} onClick={() => setHidden("hidden")}>Profile</Link>
					</li>
					<li>
						<button className="text-white underline mt-0" onClick={signOut}>Log out</button>
					</li>
				</ul>
			</div>
		</div>
	)

}

export default Menu;
