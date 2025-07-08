import { FaGithub } from "react-icons/fa";


const Footer = () => {
	return (
		<div className="bg-secondary">
			<div className="flex justify-center gap-30">
				<h1 className="font-alegreya text-[80px] text-accent underline mt-10">Help</h1>
				<div className="flex flex-col">
					<h1 className="font-alegreya text-[80px] text-accent underline mt-10">Contact</h1>
					<p className="text-white">tr3ysonb@gmail.com</p>
				</div>

				<div className="flex flex-col">
					<h1 className="font-alegreya text-[80px] text-accent  underline mt-10" >Social</h1>
					<div className="flex justify-center">
						<FaGithub color="white" />
						<p className="text-white">github.com/treslechesen</p>
					</div>
				</div>

			</div>
		</div>

	)
}
export default Footer;
