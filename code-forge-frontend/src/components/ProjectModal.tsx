import React, { use, useEffect } from "react";
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
import type { Project } from '../types'
import { supabaseClient } from "../config/supabase-clients";




const supabase = supabaseClient
const storedCourseID = JSON.parse(localStorage.getItem('courseID'))

type ProjectModalProp = {
	onProjectChange: () => void;
}

const ProjectModal: React.FC<ProjectModalProp> = ({ onProjectChange }) => {

	const [open, setOpen] = useState<boolean>(false)

	const [formData, setFormData] = useState<Project>({
		project_user: "",
		description: "",
		course_id: storedCourseID,
		title: "",
		likes: 0
	})



	useEffect(() => {

		const fetchUser = async () => {
			try {
				const { data: { user }, error } = await supabase.auth.getUser();

				if (error) {
					console.log(error)
				}
				if (user) {
					const fetchStats = async () => {
						const { data } = await supabaseClient
							.from('student')
							.select('name')
							.eq('email', user.email)
						if (data && data.length > 0) {
							setFormData({
								project_user: data[0].name,
								description: "",
								course_id: storedCourseID,
								title: "",
								likes: 0,
							})
						} else {
							const { data } = await supabaseClient
								.from('teacher')
								.select('*')
								.eq('email', user.email)
							if (data && data.length > 0) {
								setFormData({
									project_user: data[0].name,
									description: "",
									course_id: storedCourseID,
									title: "",
									likes: 0,
								})
							}

						}
					}
					fetchStats()

				}

			} catch (err) {
				console.log('No')
			}
		}



		fetchUser()

	}, [])



	const AddProject = async (newProject: Project) => {
		const { error } = await supabaseClient
			.from("project")
			.insert([newProject])
			.single();

		if (error) {
			console.log(error.hint)
			console.log(formData)
		} else {
			onProjectChange()
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
		AddProject(formData)
		setOpen(false)
	}





	return (
		<Dialog open={open}>
			<DialogTrigger asChild>
				<button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-button hover:bg-local-accent text-white text-3xl flex items-center justify-center shadow-lg    pb-[2px]" onClick={() => { setOpen(true) }}>+</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-card">
				<form onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle className="text-white">New post</DialogTitle>
						<DialogDescription>
							Post a project you have been working on.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="question" className="mt-5 text-white">Title</Label>
							<Input id="title" name="title" value={formData.title} onChange={handleChange} className="text-white" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="description" className="text-white">Description</Label>
							<Input id="description" value={formData.description} name="description" onChange={handleChange} className="text-white" />
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

export default ProjectModal;
