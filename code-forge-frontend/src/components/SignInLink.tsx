import { Link } from "react-router-dom";
import NavButton from "./NavButton";

const SignInLink = () => {
	return (
		<div className="flex gap-10 mr-10">
			<Link to="/login">
				<NavButton text="Login" />
			</Link>
			<Link to="/signup">
				<NavButton text="Sign up" />
			</Link>
		</div>
	)
}

export default SignInLink;
