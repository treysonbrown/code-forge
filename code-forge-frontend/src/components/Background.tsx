type BackgroundProps = {
	subText: string;
}
const Background: React.FC<BackgroundProps> = ({ subText }) => {
	return (
		<div >
			<div className="p-56 bg-[url(../src/assets/LandingBackground.png)] bg-no-repeat bg-cover">
				<div className="flex justify-center gap-1">
					<h1 className="flex justify-center font-sansita text-5xl md:text-7xl lg:text-9xl text-white italic drop-shadow-4xl">Code</h1>
					<h1 className="flex justify-center font-sansita text-5xl md:text-7xl lg:text-9xl text-local-accent italic drop-shadow-4xl">Forge</h1>
				</div>
				<p className="flex text-center text-sm md:text-2xl lg:text-4xl text-white justify-center font-sansita  mt-4 wrap">{subText}</p>
			</div>
			<div className="flex flex-row justify-between ml-[10%] mr-[10%]">
			</div>
		</div>
	)
}

export default Background;
