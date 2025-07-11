import BlueHeader from "./BlueHeader"


type AboutCardProps = {
	header: string;
	desc: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ header, desc }) => {
	return (
		<div className="flex flex-col">
			<BlueHeader text={header} textSize={6} />
			<p className="flex  text-center justify-center font-alegreya  text-sm md:text-base lg:text-1xl text-white font-bold ">{desc}</p>
		</div>
	)
}

export default AboutCard;
