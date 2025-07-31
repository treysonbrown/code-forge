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
import { useState } from "react"
import type { Resource } from '../types'
import { supabaseClient } from "../config/supabase-clients";
import { Textarea } from "./ui/textarea";
import { toast } from "react-toastify";



type ResourceModalProps = {
	onResourceChange: () => void;
}

const ResourceModal: React.FC<ResourceModalProps> = ({ onResourceChange }) => {

	const [open, setOpen] = useState<boolean>(false)
	const storedCourseID = JSON.parse(localStorage.getItem('courseID'))
	const storedTeacher = JSON.parse(localStorage.getItem('teacher'))
	const [formData, setFormData] = useState<Resource>({

		title: "",
		description: "",
		link: "",
		course_id: storedTeacher,
	})

	const AddResource = async (newResource: Resource) => {
		const { error } = await supabaseClient
			.from("resources")
			.insert([newResource])
			.single();

		if (error) {
			console.log(error.hint)
			console.log(formData)
			toast.error("Error adding to resources", {
				position: "top-center"
			})
		} else {
			toast.success("Added to resources", {
				position: "top-center"
			})
			onResourceChange()
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
		const new_resource: Resource = {
			title: formData.title,
			description: formData.description,
			link: formData.link,
			course_id: storedCourseID
		}

		AddResource(new_resource)
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
						<DialogTitle className="text-white">Add a new resource</DialogTitle>
						<DialogDescription>
							Please make sure
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="question" className="mt-5 text-white">Title</Label>
							<Input id="title" name="title" value={formData.title} onChange={handleChange} className="text-white" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="question" className="mt-5 text-white">Link</Label>
							<Input id="link" name="link" value={formData.link} onChange={handleChange} className="text-white" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="question" className="mt-5 text-white">Description</Label>
							<Textarea id="description" name="description" value={formData.description} onChange={handleChange} className="text-white" />
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline" className="mt-5 bg-local-primary" onClick={() => { setOpen(false) }}>Cancel</Button>
						</DialogClose>
						<Button type="submit" onClick={handleSubmit} className="mt-5 bg-button hover:bg-local-accent text-white">Post</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog >
	)
}

export default ResourceModal;
