import type { MouseEventHandler } from "react";

type SignUpButtonProp = {
	text: string;
	buttonFunction: MouseEventHandler;
}
const SignUpButton: React.FC<SignUpButtonProp> = ({ text, buttonFunction }) => {
	return (
		<button type="button" onClick={buttonFunction} className="p-25 flex justify-center text-white bg-gradient-to-r from-button via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-bold text-5xl   text-center me-2 mb-2">{text}</button>
	)
}
export default SignUpButton;
