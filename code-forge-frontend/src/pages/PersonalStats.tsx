import Header from "../components/Header";
import WhiteHeader from "../components/WhiteHeader";

const PersonalStats = () => {
	return (
		<div>
			<Header whiteText="PERSONAL" blueText="STATS" textSize={6} />
			<div className="flex flex-col justify-center">
				<WhiteHeader text="DAILY STREAK" textSize={4} />
				<WhiteHeader text="DAYS" textSize={4} />
				<WhiteHeader text="POINTS" textSize={4} />
				<Header whiteText="QUESTIONS" blueText="ANSWERED" textSize={4} />
			</div>
		</div>
	)
}
export default PersonalStats;
