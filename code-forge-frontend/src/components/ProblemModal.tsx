import React, { useEffect } from "react";
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
import { useState } from "react"
import type { Problem } from '../types'
import { supabaseClient } from "../config/supabase-clients";
import { Textarea } from "./ui/textarea";


const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { user } = data


const NewQuestionDialog = () => {

	const [courseID, setCourseID] = useState<Number>()
	const [open, setOpen] = useState<boolean>(false)
	const [formData, setFormData] = useState<Problem>({
		question: "",
		description: "",
		course_id: courseID,
		difficulty: "Easy",
		answer: "",
		correct: false,
		points: 0,
	})
	const [teacher, setTeacher] = useState()

	const AddProblem = async (newProblem: Problem) => {
		const { error } = await supabaseClient
			.from("problem")
			.insert([newProblem])
			.single();

		if (error) {
			console.log(error.hint)
			console.log(formData)
		} else {
			console.log("success")
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formData)
		fetchIDTeacher()
		setOpen(false)
	}


	const fetchIDTeacher = async () => {
		const { data, error } = await supabaseClient
			.from('course')
			.select('id')
			.eq('email', user?.email)
		setCourseID(data[0].id)
		if (error) {
			console.log(error)
		} else {
			AddProblem({
				question: formData.question,
				description: formData.description,
				course_id: data[0].id,
				answer: formData.answer,
				correct: false,
				points: formData.points,
				difficulty: formData.difficulty,
			})
		}
	}








	return (
		<Dialog open={open}>
			<DialogTrigger asChild>
				<button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-button hover:bg-local-accent text-white text-3xl flex items-center justify-center shadow-lg    pb-[2px]" onClick={() => { setOpen(true) }}>+</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-card">
				<form onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle className="text-white">New Question</DialogTitle>
						<DialogDescription>
							Create a new question for your class.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="question" className="mt-5 text-white">Question</Label>
							<Input id="question" name="question" value={formData.question} onChange={handleChange} className="text-white" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="description" className="text-white">Description</Label>
							<Textarea id="description" value={formData.description} name="description" onChange={handleChange} className="text-white" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="description" className="text-white">Answer</Label>
							<Input id="answer" value={formData.answer} name="answer" onChange={handleChange} className="text-white" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="description" className="text-white">Points</Label>
							<Input id="points" value={formData.points} name="points" onChange={handleChange} className="text-white" />
						</div>
						<div className="">
							<label htmlFor="category" className="block mb-2 text-sm font-medium text-white">Difficulty</label>
							<select id="difficulty" value={formData.difficulty} name="difficulty" onChange={handleChange} className="bg-card border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
								<option value="Easy">Easy</option>
								<option value="Medium">Medium</option>
								<option value="Hard">Hard</option>
							</select>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline" className="mt-5 bg-local-primary" onClick={() => { setOpen(false) }}>Cancel</Button>
						</DialogClose>
						<Button type="submit" className="mt-5 bg-button hover:bg-local-accent text-white">Post</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog >
	)
}

export default NewQuestionDialog;
