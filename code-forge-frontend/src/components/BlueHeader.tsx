type BlueHeaderProps = {
	text: string;
	textSize: number;
}

const BlueHeader: React.FC<BlueHeaderProps> = ({ text, textSize }) => {
	const large: string = String(textSize)
	const medium: string = String(textSize - 1)
	const small: string = String(textSize - 3)
	return <h1 className={`flex justify-center mt-30 text-accent text-${small}xl md:text-${medium}xl lg:text-${large}xl font-bold`}>{text}</h1>
}

export default BlueHeader;
