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
import { useState } from "react"
import { Link } from "react-router-dom"

type FormData = {
	email: string;
	password: string;
	username: string;
	role: string;
	classCode: string;
}

const supabase = supabaseClient

const RegristrationForm = () => {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		username: '',
		role: '',
		classCode: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const test = () => {
		console.log(formData)
	}

	const handleSumbit = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		})
		if (error) {
			console.log(error)
		} else {
			console.log(data)
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

						<div className="">
							<label htmlFor="category" className="block mb-2 text-sm font-medium text-white">Role</label>
							<select id="role" name="role" onChange={handleChange} className="bg-card border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
								<option value="Student">Student</option>
								<option value="Teacher">Teacher</option>
							</select>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button type="submit" className="w-full" onClick={test}>
					Create an account
				</Button>
				<Button variant="outline" className="w-full">
					Sign up with Google
				</Button>
			</CardFooter>
		</Card>
	)
}

export default RegristrationForm;
