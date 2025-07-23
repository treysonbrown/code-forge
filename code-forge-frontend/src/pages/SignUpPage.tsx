import StudentRegristrationForm from '@/components/StudentRegristrationForm'
import { useState } from 'react'
import WhiteHeader from '@/components/WhiteHeader'
import SignUpButton from '@/components/SignUpButton'
import TeacherRegristrationForm from '@/components/TeacherRegristrationForm'
import BlueHeader from '@/components/BlueHeader'



const SignUpPage = () => {
	const [role, setRole] = useState("none")

	if (role === "none") {
		return (
			<div className='flex justify-center flex-col  justify-center'>

				<div className='flex justify-center'>
					<WhiteHeader text='Join Code' />
					<BlueHeader text='Forge' />
				</div>
				<p className='flex justify-center mt-10 text-2xl'>Choose your role to get started</p>

				<div className='flex flex-col justify-center mt-15 gap-10 mr-[10%] ml-[10%] mb-20'>

					<SignUpButton text="I'm a student" background='local-accent' buttonFunction={() => { setRole('student') }} />
					<SignUpButton text="I'm a teacher" background='gray' buttonFunction={() => { setRole('teacher') }} />
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
