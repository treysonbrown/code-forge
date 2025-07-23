import type { MouseEventHandler } from "react";

type SignUpButtonProp = {
	text: string;
	buttonFunction: MouseEventHandler;
	background: string;
}
const SignUpButton: React.FC<SignUpButtonProp> = ({ text, buttonFunction, background }) => {
	return (
		<button type="button" onClick={buttonFunction} className={`text-bold text-3xl rounded-3xl mr-20 ml-20 bg-${background} p-10 text-white`}>{text}</button>
	)
}
export default SignUpButton;
