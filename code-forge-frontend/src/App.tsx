import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

	return (
		<>
			<div className="bg-local-primary">
				<Navbar />
				<main>
					<Outlet />
				</main>
			</div>

		</>

	)
}

export default App
