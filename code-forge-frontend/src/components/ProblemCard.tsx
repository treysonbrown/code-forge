import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabaseClient } from "@/config/supabase-clients";

type ProblemCardProps = {
	title: string;
	diffuculty?: string;
	description?: string;
	answer: string;
	id: number;
	points: number;
}


const ProblemCard: React.FC<ProblemCardProps> = ({ title, diffuculty = "none", description, answer, id, points }) => {

	const [open, setOpen] = useState(false)
	const [userAnswer, setUserAnswer] = useState("")
	const [updatedPoints, setUpdatedPoints] = useState<Number>()


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setUserAnswer(value)
	};


	const updateProblem = async () => {
		console.log(id)
		const { error } = await supabaseClient
			.from("problem")
			.update({ points: updatedPoints })
			.eq('id', id)

		if (error) {
			console.log(error.hint)
		} else {
			console.log("success")
		}
	}


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		console.log(userAnswer)
		console.log(answer)
		if (userAnswer === answer) {
			updateProblem()
			alert("Correct!")
		} else {
			alert("Sorry that is incorrect")
		}

		setOpen(false)
	}

	return (
		<>
			<button className="flex flex-col justify-center bg-black  p-20 rounded-3xl gap-3 drop-shadow-gradient" onClick={() => { setOpen(true) }}>
				<h1 className="flex  text-center justify-center font-alegreya  text-base md:text-xl lg:text-2xl text-white font-bold ">{title}</h1>
				<p className="flex  text-center justify-center font-alegreya  text-base md:text-xl lg:text-2xl text-local-accent font-bold ">{diffuculty}</p>
			</button>

			<Dialog open={open}>
				<DialogContent className="sm:max-w-[425px] bg-card">
					<form onSubmit={handleSubmit}>
						<DialogHeader>
							<DialogTitle className="text-white">{title}</DialogTitle>

							<DialogDescription className="text-white">
								{description}
							</DialogDescription>
							<h1 className="text-gray">{points} points</h1>
						</DialogHeader>
						<div className="grid gap-4">
							<div className="grid gap-3">
								<Label htmlFor="question" className="mt-5 text-white">Answer</Label>
								<Input id="userAnswer" value={userAnswer} name="userAnswer" onChange={handleChange} className="text-white" />
							</div>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline" className="mt-5 bg-local-primary" onClick={() => { setOpen(false) }}>Cancel</Button>
							</DialogClose>
							<Button type="submit" className="mt-5 bg-button hover:bg-local-accent text-white">Submit</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog >
		</>
	)
}

export default ProblemCard;
