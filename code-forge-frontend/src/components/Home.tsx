import Background from "../components/Background"
import Footer from "../components/Footer"
import HelpfulResourcesCard from "../components/HelpfulResourcesCard"
import LeaderBoardCard from "../components/LeaderBoardCard"
import PersonalStatsCard from "../components/PersonalStatsCard"
import PracticeFeedCard from "../components/PracticeFeedCard"
import ProjectSharingCard from "../components/ProjectSharingCard"

const Home = () => {



	return (
		<>
			<div className="">
				<Background />





				<div className="flex flex-col gap-10 ml-30 mr-30 justify-center">

					<div className="flex flex-col lg:flex-row gap-10 justify-center mt-10">
						<div className="flex flex-col justify-between gap-10">
							<div className=""><LeaderBoardCard /></div>
							<div className=""><PracticeFeedCard /></div>
						</div>
						<div className="flex flex-col justify-between gap-10">
							<div className="row-span-2 col-start-2 row-start-1"><ProjectSharingCard /></div>
							<div className="row-span-3 col-start-2 row-start-3"><PersonalStatsCard /></div>
						</div>
					</div>
					<HelpfulResourcesCard />
				</div>


				<div className="p-10"></div>


			</div>
			<Footer />
		</>
	)
}
export default Home;
