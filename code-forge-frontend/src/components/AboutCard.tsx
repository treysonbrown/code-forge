import BlueHeader from "./BlueHeader"


type AboutCardProps = {
	header: string;
	desc: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ header, desc }) => {
	return (
		<div className="bg-local-background text-white border-2 border-white py-3 px-6 rounded-lg shadow-lg">
			<div className="-mt-20">
				<BlueHeader text={header} />
			</div>
			<p className="flex text-center justify-center font-alegreya  text-sm md:text-base lg:text-1xl text-white font-bold ">{desc}</p>
		</div>
	)
}

export default AboutCard;
