type ResourceCardProps = {
	title: string;
	description?: string;
	link?: string;
}
const ResourceCard: React.FC<ResourceCardProps> = ({ title, description = "", link = "" }) => {
	return (
		<a href={link} target="_blank">
			<div className="flex flex-col justify-center bg-black p-20 rounded-3xl gap-3 drop-shadow-gradient">
				<h1 className="flex  text-center justify-center font-alegreya  text-base md:text-xl lg:text-2xl text-local-accent font-bold ">{title}</h1>
				<p className="flex  text-center justify-center font-alegreya  text-sm md:text-base lg:text-xl text-white font-bold ">{description}</p>
			</div>
		</a>
	)
}

export default ResourceCard;
