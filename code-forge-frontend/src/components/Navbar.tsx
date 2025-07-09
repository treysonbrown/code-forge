import { Link } from "react-router";
import Menu from "./Menu";


const Navbar = () => {


	return (
		<nav className="fixed top-0 w-full z-100 p-3 bg-nav">
			<div className="flex justify-between w-full">
				<div className="flex center-items">
					<div className="flex">
						<Link to="/">
							<div className="flex items-center gap-5">
								<img src="../../src/assets/logo.svg" />
								<h1 className="font-alegreya  md:text-3xl lg:text-4xl text-white font-bold">CODE FORGE</h1>
							</div>
						</Link>
					</div>
					<Menu />
				</div>

			</div>


		</nav>
	)
}

export default Navbar;
