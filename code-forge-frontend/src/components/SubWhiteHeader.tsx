type SubWhiteHeaderProps = {
	text: string;
}

const SubWhiteHeader: React.FC<SubWhiteHeaderProps> = ({ text }) => {
	return <h1 className={`flex justify-center mt-30 text-white text-2xl md:text-4xl lg:text-6xl font-bold`}>{text}</h1>
}

export default SubWhiteHeader;
