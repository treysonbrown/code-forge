import { Link } from "react-router-dom";

const SignInLink = () => {
	return (
		<div className="flex gap-10 mr-10">
			<Link to="/login">
				<h1 className="text-white mt-2 mr-2">Login</h1>
			</Link>
			<Link to="/signup">
				<h1 className="text-white mt-2 mr-2">Sign up</h1>
			</Link>
		</div>
	)
}

export default SignInLink;
