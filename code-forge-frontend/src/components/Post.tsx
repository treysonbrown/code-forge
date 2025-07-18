import type { Project } from "@/types";
import Like from "./Like";



const Post: React.FC<Project> = ({ title, description, project_user, likes }) => {
	return (
		<div className="flex flex-col justify-center bg-local-secondary  pr-20 pt-15 pb-5 pl-5 rounded-3xl gap-3 drop-shadow-gradient">
			<h1 className="flex  text-center flex-start font-alegreya  text-base md:text-xl lg:text-2xl text-local-accent font-bold ">{project_user}</h1>
			<p className="flex  text-center flex-start font-alegreya  text-base md:text-xl lg:text-2xl text-local-white font-bold ">{title}</p>
			<p className="flex  text-center flex-start font-alegreya  text-sm md:text-base lg:text-xl text-white font-bold ">{description}</p>
			<Like likeCount={likes} />
		</div>
	)
}
export default Post;
