type NavButtonProps = {
	text: string;
}
const NavButton: React.FC<NavButtonProps> = ({ text }) => {
	return (
		<button className="bg-black text-white border-2 border-white py-3 px-6 rounded-lg shadow-lg hover:bg-local-primary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
			{text}
		</button>
	)
}

export default NavButton;
