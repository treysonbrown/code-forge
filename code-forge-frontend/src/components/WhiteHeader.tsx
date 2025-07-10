type WhiteHeaderProps = {
	text: string;
}

const WhiteHeader: React.FC<WhiteHeaderProps> = ({ text }) => {
	return <h1 className="flex justify-center mt-30 text-white text-3xl md:text-5xl lg:text-6xl font-bold">{text}</h1>
}

export default WhiteHeader;
