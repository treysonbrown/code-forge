import { Link } from "react-router-dom";

const ProjectSharingCard: React.FC = () => {
	return (
		<Link to="/projectsharing">
			<div className="relative flex flex-col justify-center bg-gray hover:bg-hover transition-all duration-300 ease-in-out rounded-3xl  overflow-hidden max-w-full">
				<div className="flex justify-center">
					<img src="../../src/assets/ProjectSharing.png" className="w-[91%] mb-4" />
				</div>
				<h1 className="absolute top-1/4 right-32 font-alegreya text-white  md:text-3xl lg:text-4xl font-bold">PROJECT</h1>
				<h1 className="absolute top-7/8 left-10 -translate-y-1/2 font-alegreya  md:text-3xl lg:text-4xl text-local-accent font-bold">SHARING</h1>
			</div>
		</Link>
	);
};

export default ProjectSharingCard;
