import StudentRegristrationForm from '@/components/StudentRegristrationForm'
import { useState } from 'react'
import WhiteHeader from '@/components/WhiteHeader'
import SignUpButton from '@/components/SignUpButton'
import TeacherRegristrationForm from '@/components/TeacherRegristrationForm'



const SignUpPage = () => {
	const [role, setRole] = useState("none")

	if (role === "none") {
		return (
			<div className='flex justify-center flex-col  justify-center'>
				<WhiteHeader text='Pick your role' />
				<div className='flex justify-center mt-15 gap-10'>
					<SignUpButton text="I'm am a student" buttonFunction={() => { setRole('student') }} />
					<SignUpButton text="I'm am a teacher" buttonFunction={() => { setRole('teacher') }} />
				</div>
			</div>
		)

	} else if (role === 'student') {
		return (
			<>
				<div className='flex justify-center w-full mt-40'>
					<StudentRegristrationForm />
				</div>
			</>
		)
	} else if (role === 'teacher') {
		return (
			<div className='flex justify-center w-full mt-40'>
				<TeacherRegristrationForm />
			</div>
		)
	}

}

export default SignUpPage;
