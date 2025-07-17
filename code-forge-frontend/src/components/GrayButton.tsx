import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

type GrayButtonProps = {
	linkTo: string;
	buttonText: string;
}

const GrayButton: React.FC<GrayButtonProps> = ({ linkTo, buttonText }) => {

	return (
		<div className="flex justify-center">
			<Link to={linkTo}>
				<div className="flex justify-between bg-gray p-10 lg:w-5xl md:w-3xl sm: w-xl text-white text-xl md:text-2xl lg:text-4xl font-bold">
					<h1>{buttonText}</h1>
					<IoIosArrowForward />
				</div>
			</Link>
		</div>
	)
}

export default GrayButton;
