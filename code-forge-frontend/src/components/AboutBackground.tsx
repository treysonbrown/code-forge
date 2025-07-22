import { Link } from "react-router-dom";

const AboutBackground: React.FC = () => {
	return (
		<div >
			<div className="p-56 bg-[url(../src/assets/LandingBackground.png)] bg-no-repeat bg-cover">
				<div className="flex justify-center gap-1">
					<h1 className="flex justify-center font-sansita text-5xl md:text-7xl lg:text-9xl text-white italic drop-shadow-4xl">Code</h1>
					<h1 className="flex justify-center font-sansita text-5xl md:text-7xl lg:text-9xl text-local-accent italic drop-shadow-4xl">Forge</h1>
				</div>
				<p className="flex text-center text-sm md:text-2xl lg:text-4xl text-white justify-center font-sansita  mt-4 wrap">Learn coding both in and out of class</p>
				<div className="flex justify-center gap-2">

					<p className="flex text-center text-sm md:text-2xl lg:text-4xl text-white justify-center font-sansita  mt-4 wrap">Don't have an account?</p>
					<Link to="/signup" ><p className="flex text-center text-sm md:text-2xl lg:text-4xl text-local-accent  justify-center font-sansita  mt-4 wrap  underline ">Sign up </p></Link>
				</div>

			</div>
			<div className="flex flex-row justify-between ml-[10%] mr-[10%]">
			</div>
		</div>
	)
}

export default AboutBackground;
