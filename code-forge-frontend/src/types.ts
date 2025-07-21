
export type AnswerProp = {
	answerName: string;
	correct: boolean;
}

export type RunnerUpProps = {
	place: number;
	username: string;
	bgColor: string;
	points: number;
}

export type Problem = {
	question: string;
	description: string;
	course_id: number;
	difficulty: string;
	answer: string;
}


export type Student = {
	email: string;
	id: number;
	name: string;
	points: number;
	problems_solved: number;
}


export type ResourceResponse = {
	title: string;
	description: string;
	link: string
}


export type Resource = {
	title: string;
	description: string;
	link: string
	course_id: number;
}

export type Project = {
	course_id: number;
	title: string;
	description: string;
	likes: number;
	project_user: string;
}
