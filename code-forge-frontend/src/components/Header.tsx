import BlueHeader from "./BlueHeader";
import WhiteHeader from "./WhiteHeader";

type HeaderProps = {
	whiteText: string;
	blueText: string;
	textSize: number;

}

const Header: React.FC<HeaderProps> = ({ whiteText, blueText, textSize }) => {
	return (
		<div className="flex justify-center gap-3">
			<WhiteHeader text={whiteText} textSize={textSize} />
			<BlueHeader text={blueText} textSize={textSize} />
		</div>
	)
}
export default Header;
