type HeaderWhiteProps = {
	text: string
}


const HeaderWhite: React.FC<HeaderWhiteProps> = ({ text }) => {
	return <h1 className="font-alegreya  md:text-6xl lg:text-7xl text-white font-bold">{text}</h1>
}

export default HeaderWhite;
