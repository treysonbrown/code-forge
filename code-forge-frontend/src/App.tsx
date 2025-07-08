import Footer from "./components/Footer"
import HelpfulResourcesCard from "./components/HelpfulResourcesCard"
import LeaderBoardCard from "./components/LeaderBoardCard"
import PersonalStatsCard from "./components/PersonalStatsCard"
import PracticeFeedCard from "./components/PracticeFeedCard"
import ProjectSharingCard from "./components/ProjectSharingCard"

function App() {

	return (
		<div>
			<div className="bg-primary">
				<div className="p-56 bg-[url(../src/assets/LandingBackground.png)] bg-contain bg-size[100vw] font">
					<div className="flex justify-center gap-1">
						<h1 className="flex justify-center font-sansita text-8xl text-white">Code</h1>
						<h1 className="flex justify-center font-sansita text-8xl text-accent">Forge</h1>
					</div>
					<p className="flex text-2xl text-white justify-center font-sansita mt-4">Practice Coding both in and out of the classroom</p>
				</div>
				<div className="flex justify-center">


					<div className="flex flex-col gap-10">
						<div className="flex gap-10">
							<PracticeFeedCard />
							<LeaderBoardCard />
						</div>
						<div className="flex gap-10">
							<PersonalStatsCard />
							<ProjectSharingCard />
						</div>
						<HelpfulResourcesCard />
					</div>




				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
