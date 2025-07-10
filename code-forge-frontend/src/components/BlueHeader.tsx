type BlueHeaderProps = {
	text: string;
}

const BlueHeader: React.FC<BlueHeaderProps> = ({ text }) => {
	return <h1 className="flex justify-center mt-30 text-accent text-3xl md:text-5xl lg:text-6xl font-bold">{text}</h1>
}

export default BlueHeader;
