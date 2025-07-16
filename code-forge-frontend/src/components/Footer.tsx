const Footer = () => {
	return (
		<div className="bg-secondary p-10">
			<div className="flex justify-center gap-5 md:gap-15 lg:gap-30">
				<h1 className="font-alegreya sm:text-[30px] md:text-[50px] lg:text-[60px] text-local-accent underline mt-10">Help</h1>
				<div className="flex flex-col">
					<h1 className="font-alegreya sm:text-[30px] md:text-[50px] lg:text-[60px] text-local-accent underline mt-10">Contact</h1>
					<p className="text-white text-[5px] md:text-[15px] lg:text-[20px]">tr3ysonb@gmail.com</p>
				</div>

				<div className="flex flex-col">
					<h1 className="font-alegreya sm:text-[30px] md:text-[50px] lg:text-[60px] text-local-accent underline mt-10" >Social</h1>
					<div className="flex justify-center align-items">
						<a className="text-white text-[5px] md:text-[10px] lg:text-[20px]" href="https://github.com/treslecheson">github.com/treslechesen</a>
					</div>
				</div>
			</div>
		</div>

	)
}
export default Footer;
