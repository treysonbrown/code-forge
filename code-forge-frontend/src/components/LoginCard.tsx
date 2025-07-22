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
}

const supabase = supabaseClient
const LoginCard = () => {

	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

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
