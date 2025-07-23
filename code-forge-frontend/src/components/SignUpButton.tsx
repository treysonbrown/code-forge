import type { MouseEventHandler } from "react";

type SignUpButtonProp = {
	text: string;
	buttonFunction: MouseEventHandler;
	background: string;
	textColor: string;
	hoverColor: string;
}
const SignUpButton: React.FC<SignUpButtonProp> = ({ text, buttonFunction, background, textColor, hoverColor }) => {
	return (
		<button type="button" onClick={buttonFunction} className={`text-bold text-3xl rounded-3xl mr-20 ml-20 bg-${background} p-10 text-${textColor} hover:bg-${hoverColor} transition-all duration-300 ease-in-out`}>{text}</button>
	)
}
export default SignUpButton;
