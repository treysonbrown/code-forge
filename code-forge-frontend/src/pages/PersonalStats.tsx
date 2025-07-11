import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import SubWhiteHeader from "../components/SubWhiteHeader";

const PersonalStats = () => {
	return (
		<div>
			<Header whiteText="PERSONAL" blueText="STATS" />
			<div className="flex flex-col justify-center">
				<SubWhiteHeader text="DAILY STREAK" />
				<SubWhiteHeader text="DAYS" />
				<SubWhiteHeader text="POINTS" />
				<SubHeader whiteText="QUESTIONS" blueText="ANSWERED" />
				<SubWhiteHeader text="BADGES" />
			</div>
		</div>
	)
}
export default PersonalStats;
