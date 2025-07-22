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
}

type StudentType = {
	name: string;
	email: string;
	problems_solved: number;
	points: number;
	course_id: number;
}

const supabase = supabaseClient

const StudentRegristrationForm = () => {
	const [courseID, setCourseID] = useState<number>()

	const [teacherID, setTeacherID] = useState('')
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		username: '',
		teacher_email: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};







	const createStudent = async () => {
		const { data, error } = await supabaseClient
			.from("course")
			.select("id")
			.eq('email', formData.teacher_email)
		setCourseID(Number(data[0].id))
		console.log(courseID)

		if (error) {
			console.log(error.hint)
		}
		else {
			if (courseID) {
				setTeacherID(data[0].id)
				const new_student: StudentType = {
					name: formData.username,
					email: formData.email,
					problems_solved: 0,
					points: 0,
					course_id: courseID,
				}
				console.log(teacherID)
				const { error } = await supabaseClient
					.from("student")
					.insert([new_student])
					.single()
				if (error) {
					console.log("failure 3")
					console.log(error.hint)
				} else {
					console.log("success 3")
				}

			}

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
			createStudent()
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
							<Input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
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
							<Label htmlFor="class_code">Teacher's email</Label>
							<Input
								id="teacher_email"
								type="teacher_email"
								placeholder="teacher_email"
								name="teacher_email"
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

export default StudentRegristrationForm;
