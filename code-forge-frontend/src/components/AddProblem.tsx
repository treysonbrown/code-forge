import { useEffect } from "react";
import { supabaseClient } from "../config/supabase-clients"
import type { Problem } from "../types";


const newProblemData: Problem =
{
	question: "gui",
	description: "gui",
	difficulty: "medium",
	answers: "gui",
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
