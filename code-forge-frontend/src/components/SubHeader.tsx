import SubBlueHeader from "./SubBlueHeader";
import SubWhiteHeader from "./SubWhiteHeader";

type SubHeaderProps = {
	whiteText: string;
	blueText: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ whiteText, blueText }) => {
	return (
		<div className="flex justify-center gap-3">
			<SubWhiteHeader text={whiteText} />
			<SubBlueHeader text={blueText} />
		</div>
	)
}
export default SubHeader;
