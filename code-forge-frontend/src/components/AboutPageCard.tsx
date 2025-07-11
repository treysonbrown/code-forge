type AboutPageCardProps = {
	descript: string;
}
const AboutPageCard: React.FC<AboutPageCardProps> = ({ descript }) => {
	return (
		<div className="flex flex-col justify-center bg-black p-20 rounded-3xl gap-3 drop-shadow-gradient">
			<p className="flex  text-center justify-center font-alegreya  text-sm md:base lg:text-xl text-white font-bold ">{descript}</p>

		</div>

	)
}

export default AboutPageCard;
