type MenuTextProps = {
	text: string;
}
const MenuText: React.FC<MenuTextProps> = ({ text }) => {
	return <h1 className="text-white">{text}</h1>
}

export default MenuText;
