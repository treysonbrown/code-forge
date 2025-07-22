import AboutBackground from "@/components/AboutBackground";
import AboutCard from "../components/AboutCard";
import AboutPageCard from "../components/AboutPageCard";
import Footer from "../components/Footer";
import SubBlueHeader from "../components/SubBlueHeader";



const About = () => {

	return (

		<div>
			<AboutBackground />
			<div className="grid grid-cols-2 mr-[10%] ml-[10%] gap-10">
				<AboutCard header="ABOUT US" desc="We're building the place students actually want to code.
Coding outside of class shouldn’t feel like a chore. That’s why we created [Your Site Name]—a practice and peer-learning platform designed specifically for high school and college students in computer science.
We give students the tools and motivation to sharpen their programming skills in a way that’s engaging, consistent, and collaborative. From a feed of curated practice problems to forums, streak tracking, and a leaderboard, everything is designed to make it easy—and even fun—to log in daily and code.
Whether you're prepping for your next exam, building your portfolio, or just want to solve cool problems and connect with other developers, you're in the right place." />
				<AboutCard header="OUR MISSION" desc="To create a go-to daily platform that supports and motivates students to practice programming, build confidence, and find community—outside the classroom." />
			</div>
			<div className="flex justify-center">
				<SubBlueHeader text="WHAT MAKES US DIFFERENT" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 mr-[2%] ml-[2%] mt-10 mb-10">
				<AboutPageCard descript="Not boring. Our sleek, dark-themed interface is made to feel motivating, not overwhelming" />
				<AboutPageCard descript="Built for students. We understand how classes work and how hard it is to practice on your own." />
				<AboutPageCard descript="Community-First. Learn, share, and grow with other students who get it." />
				<AboutPageCard descript="Built for students. We understand how classes work and how hard it is to practice on your own." />
			</div>
			<Footer />
		</div>
	)
}

export default About;
