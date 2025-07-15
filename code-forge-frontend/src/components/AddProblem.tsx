import { useEffect } from "react";
import { supabaseClient } from "../config/supabase-clients"

type Problem = {
	question: string;
	description: string;
	answers: string;
	course_id: number;
}

const newProblemData: Problem =
{
	question: "Write a recursive Fibonacci function in C++",
	description: "Implement a recursive function in C++ that returns the nth Fibonacci number.",
	answers: "int fibonacci(int n) {\n    if (n <= 1)\n        return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}",
	course_id: 1234
}

const AddProblemComponent = () => {


	const AddProblem = async () => {
		const { data, error } = await supabaseClient
			.from("problem")
			.insert(newProblemData)
			.single();

		if (error) {
			console.log(error)
		} else {
			console.log("success")
		}
	}

	return (
		<button onClick={AddProblem}>Add problem</button>
	)




}

export default AddProblemComponent;
