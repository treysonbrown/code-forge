import { Button } from "@/components/ui/button"
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabaseClient } from "@/config/supabase-clients"
import { useState } from "react"
import { Link } from "react-router-dom"

type FormData = {
	email: string;
	password: string;
	username: string;
	teacher_email: string;
	title: string;
}

type TeacherType = {
	name: string;
	email: string;
}

type Course = {
	name: string;
	email: string;
	title: string;
	teacher_id: number;
}

const supabase = supabaseClient

const TeacherRegristrationForm = () => {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		username: '',
		teacher_email: '',
		title: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};




	const createCourse = async () => {
		const { data } = await supabaseClient
			.from('teacher')
			.select('id')
			.eq('email', formData.email)



		const newCourse: Course = {
			name: formData.username,
			email: formData.email,
			title: formData.title,
			teacher_id: data[0].id,
		}

		const { error } = await supabaseClient
			.from("course")
			.insert([newCourse])
			.single()
		if (error) {
			console.log(error.hint)
		} else {
			console.log("success")
		}
	}


	const createTeacher = async () => {
		const new_teacher: TeacherType = {
			name: formData.username,
			email: formData.email,

		}

		const { error } = await supabaseClient
			.from("teacher")
			.insert([new_teacher])
			.single()
		if (error) {
			console.log(error.hint)
		} else {
			createCourse()
		}
	}







	const handleSumbit = async () => {
		const { error } = await supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
		})

		if (error) {
			console.log(error)
		} else {
			createTeacher()

		}
	}



	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardAction>
					<Link to="/login">
						<Button variant="link" >Login</Button>
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent>
				<form>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								onSubmit={handleSumbit}
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<a
									className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
								>
									Forgot your password?
								</a>
							</div>
							<Input id="password" type="password" name="password" placeholder="*******" value={formData.password} onChange={handleChange} required />
						</div>

						<div className="grid gap-2">
							<Label htmlFor="email">Username</Label>
							<Input
								id="username"
								type="username"
								placeholder="username"
								name="username"
								value={formData.username}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="grid gap-2">
							<Label htmlFor="title">Course Title</Label>
							<Input
								id="title"
								type="title"
								placeholder="title"
								name="title"
								value={formData.title}
								onChange={handleChange}
								required
							/>
						</div>

					</div>
				</form>

			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button type="submit" className="w-full" onClick={handleSumbit}>
					Create an account
				</Button>
			</CardFooter>
		</Card>
	)
}

export default TeacherRegristrationForm;
