import { Link } from "react-router-dom"

const Logo = () => {
	return (
		<div className="flex">
			<Link to="/">
				<div className="flex items-center gap-5">
					<img src="../../src/assets/logo.svg" />
					<h1 className="font-alegreya  md:text-3xl lg:text-4xl text-white font-bold">CODE FORGE</h1>
				</div>
			</Link>
		</div>
	)
}

export default Logo;
