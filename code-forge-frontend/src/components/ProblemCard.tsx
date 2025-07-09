type ProblemCardProps = {
	title: string;
	diffuculty?: string;
}
const ProblemCard: React.FC<ProblemCardProps> = ({ title, diffuculty = "none" }) => {
	return (
		<div className="flex flex-col justify-center bg-black p-20 rounded-3xl gap-3 drop-shadow-gradient">
			<h1 className="flex  text-center justify-center font-alegreya  text-base md:text-xl lg:text-2xl text-white font-bold ">{title}</h1>
			<p className="flex  text-center justify-center font-alegreya  text-base md:text-xl lg:text-2xl text-accent font-bold ">{diffuculty}</p>
		</div>

	)
}

export default ProblemCard;
