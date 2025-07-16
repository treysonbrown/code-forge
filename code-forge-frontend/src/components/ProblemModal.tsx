import React from "react";
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, type ChangeEvent, type FormEventHandler } from "react"
import { Textarea } from "./ui/textarea"
import type { Problem } from '../types'
import { supabaseClient } from "../config/supabase-clients";




const NewQuestionDialog = () => {

	const [open, setOpen] = useState<boolean>(false)

	const [formData, setFormData] = useState<Problem>({
		question: "",
		description: "",
		difficulty: "",
		answers: "",
		course_id: 1234,
	})

	const AddProblem = async (newProblem: Problem) => {
		const { data, error } = await supabaseClient
			.from("problem")
			.insert(newProblem)
			.single();

		if (error) {
			console.log(error)
		} else {
			console.log("success")
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formData)
		AddProblem(formData)
		setOpen(false)
	}




	return (
		<Dialog open={open}>
			<DialogTrigger asChild>
				<button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-button hover:bg-local-accent text-white text-3xl flex items-center justify-center shadow-lg    pb-[2px]" onClick={() => { setOpen(true) }}>+</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<form onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle>New Question</DialogTitle>
						<DialogDescription>
							You can ask a question here if you feel so inclined
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="question" className="mt-5">Question</Label>
							<Input id="question" name="question" value={formData.question} onChange={handleChange} />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="description" className="">Description</Label>
							<Input id="description" value={formData.description} name="description" onChange={handleChange} />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="name" className="">Difficulty</Label>
							<Input id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange} />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="question">Answers</Label>
							<Textarea id="answers" name="answers" value={formData.answers} onChange={handleChange} />
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline" className="mt-5">Cancel</Button>
						</DialogClose>
						<Button type="submit" className="mt-5">Post</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog >
	)
}

export default NewQuestionDialog;
