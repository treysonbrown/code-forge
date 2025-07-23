type BlueHeaderProps = {
	text: string;
}

const BlueHeader: React.FC<BlueHeaderProps> = ({ text }) => {
	return <h1 className={`flex justify-center mt-30 mb-10 text-local-accent text-3xl md:text-5xl lg:text-7xl font-bold`}>{text}</h1>
}

export default BlueHeader;
