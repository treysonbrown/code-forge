import BlueHeader from "./BlueHeader";
import WhiteHeader from "./WhiteHeader";

type HeaderProps = {
	whiteText: string;
	blueText: string;
}

const Header: React.FC<HeaderProps> = ({ whiteText, blueText }) => {
	return (
		<div className="flex justify-center gap-3">
			<WhiteHeader text={whiteText} />
			<BlueHeader text={blueText} />
		</div>
	)
}
export default Header;
