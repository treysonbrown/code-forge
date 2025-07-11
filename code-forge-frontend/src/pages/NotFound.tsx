import { Link } from "react-router-dom";
import Header from "../components/Header";
import WhiteHeader from "../components/WhiteHeader";

const NotFound = () => {
	return (
		<div>
			<div className="flex gap-4 justify-center">
				<WhiteHeader text="PAGE" />
				<Header whiteText="NOT" blueText="FOUND" />
			</div>
			<Link to="/" className="flex justify-center mt-10  text-base md:text-xl lg:text-2xl text-blue-500 hover:text-blue-700 underline">
				Return to Home
			</Link>
		</div>
	)
}
export default NotFound;
