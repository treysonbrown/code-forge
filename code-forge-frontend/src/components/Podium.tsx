type PodiumProp = {
	first?: string;
	second?: string;
	third?: string;
}

const Podium: React.FC<PodiumProp> = ({ first = "First", second = "Second", third = "Third" }) => {
	return (
		<div className="relative flex justify-center mt-20 mb-10">
			<img src="/src/assets/Podium.svg" className="w-[40%]" />
			<p className="absolute top-6/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
				{first}
			</p>
			<p className="absolute top-7/8 left-11/30 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
				{second}
			</p>
			<p className="absolute top-9/10 right-16/50 transform  -translate-y-1/3 text-white text-3xl font-bold">
				{third}
			</p>
		</div>



	)
}

export default Podium;
