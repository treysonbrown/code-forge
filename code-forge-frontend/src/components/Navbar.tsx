import Menu from "./Menu";
import Logo from "./Logo";


const Navbar = () => {


	return (
		<nav className="fixed top-0 w-full z-100 p-3 bg-nav">
			<div className="flex justify-between center-items">

				<Logo />

				<div className="mt-2">
					<Menu />
				</div>
			</div>


		</nav>
	)
}

export default Navbar;
