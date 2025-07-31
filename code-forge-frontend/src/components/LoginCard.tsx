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
import { Link, useNavigate } from "react-router-dom"

type FormData = {
	email: string;
	password: string;
}


const supabase = supabaseClient
const { data, error } = await supabase.auth.refreshSession()
const { user } = data

const LoginCard = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: ''
	});

	const getRole = async () => {
		const { data, error } = await supabaseClient
			.from('teacher')
			.select('*')
			.eq('email', user?.email)
		if (error) {
			console.log(error)
		} else {
			if (data && data.length > 0) {
				fetchIDTeacher()
			} else {
				fetchIDStudent()
			}
		}


	}

	const fetchIDTeacher = async () => {
		const { data, error } = await supabaseClient
			.from('course')
			.select('id')
			.eq('email', user?.email)
		if (error) {
			console.log(error)
		} else {
			localStorage.setItem('courseID', JSON.stringify(data[0].id))
			localStorage.setItem('teacher', JSON.stringify(true))
			console.log("local set")
			console.log(`teacher id ${data[0].id}`)
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
			localStorage.setItem('courseID', JSON.stringify(data && data[0].course_id))
			console.log(`student id ${data && data[0].course_id}`)
		}
	}


	const fetchUserData = async () => {
		try {
			const { data: { user }, error } = await supabase.auth.getUser();

			if (error) {
				console.log(error)
			}
			if (user) {
				getRole()


			}

		} catch (err) {
			console.log('No')
		}
	}

	const signIn = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		})
		if (error) {
			console.log(error)
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
		signIn().then(() => {
			fetchUserData()
		})
	}

	useEffect(() => {

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				if (event === 'SIGNED_IN' && session) {
					console.log("test")
					navigate('/')
				}
			}
		);

		const removeLocal = () => {
			localStorage.removeItem('courseID')
			localStorage.removeItem('teacher')
		}
		removeLocal()

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [navigate]);


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
