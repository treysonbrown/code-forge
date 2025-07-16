type SubBlueHeaderProps = {
	text: string;
}

const SubBlueHeader: React.FC<SubBlueHeaderProps> = ({ text }) => {
	return <h1 className={`flex justify-center mt-30 text-local-accent text-2xl md:text-4xl lg:text-6xl font-bold`}>{text}</h1>
}

export default SubBlueHeader;
