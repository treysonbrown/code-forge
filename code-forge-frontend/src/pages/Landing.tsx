import Footer from "../components/Footer"
import HelpfulResourcesCard from "../components/HelpfulResourcesCard"
import LeaderBoardCard from "../components/LeaderBoardCard"
import PersonalStatsCard from "../components/PersonalStatsCard"
import PracticeFeedCard from "../components/PracticeFeedCard"
import ProjectSharingCard from "../components/ProjectSharingCard"

const Landing = () => {
	return (
		<>
			<div className="bg-primary ">
				<div className="p-56 bg-[url(../src/assets/LandingBackground.png)] bg-no-repeat bg-cover">
					<div className="flex justify-center gap-1">
						<h1 className="flex justify-center font-sansita text-5xl md:text-7xl lg:text-9xl text-white italic drop-shadow-4xl">Code</h1>
						<h1 className="flex justify-center font-sansita text-5xl md:text-7xl lg:text-9xl text-accent italic drop-shadow-4xl">Forge</h1>
					</div>
					<p className="flex text-center text-sm md:text-2xl lg:text-4xl text-white justify-center font-sansita  mt-4 wrap">PRACTICE CODING BOTH IN AND OUT OF THE CLASSROOM </p>
				</div>





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
export default Landing;
