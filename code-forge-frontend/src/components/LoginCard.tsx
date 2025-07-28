import { Button } from "@/components/ui/button"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabaseClient } from "@/config/supabase-clients"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type FormData = {
	email: string;
	password: string;
}


const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { user } = data

const LoginCard = () => {

	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: ''
	});
	const [teacher, setTeacher] = useState()

	const fetchIDTeacher = async () => {
		const { data, error } = await supabaseClient
			.from('course')
			.select('id')
			.eq('email', user?.email)
		if (error) {
			console.log(error)
		} else {
			localStorage.setItem('courseID', JSON.stringify(data[0].id))
			console.log("local set")
		}
	}


	const fetchIDStudent = async () => {
		const { data } = await supabaseClient
			.from('student')
			.select('course_id')
			.eq('email', user?.email)
		if (error) {
			console.log(error)
		} else {
			localStorage.setItem('courseID', JSON.stringify(data[0].course_id))
			console.log("local set")
		}
	}


	const fetchUser = async () => {
		try {
			const { data: { user }, error } = await supabase.auth.getUser();

			if (error) {
				console.log(error)
			}
			if (user) {
				console.log("test")
				const fetchRoles = async () => {
					try {
						const { data } = await supabaseClient
							.from('teacher')
							.select('name')
							.eq('email', user.email)
						localStorage.setItem('teacher', JSON.stringify(data?.length))
						console.log("teacher set")
						if (teacher) {
							fetchIDTeacher()
						}
					} catch {
						fetchIDStudent()
						localStorage.setItem('teacher', JSON.stringify([]))
					}
				}
				fetchRoles()
			}

		} catch (err) {
			console.log('No')
		}
	}






	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSumbit = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		})
		if (error) {
			console.log(error)
		}
		else {
			fetchUser()
		}
	}



	return (
		<Card className="w-full max-w-sm md:w-full md:max-w-sm lg:w-100 lg:h-90">
			<CardHeader>
				<CardTitle>Login to your account</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
				<CardAction>
					<Link to="/signup">
						<Button variant="link" >Sign Up</Button>
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
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button type="submit" className="w-full" onClick={handleSumbit}>
					Login
				</Button>
			</CardFooter>
		</Card>
	)
}

export default LoginCard;
