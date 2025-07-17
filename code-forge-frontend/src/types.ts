
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
	difficulty: string
}


export type Student = {
	email: string;
	id: number;
	name: string;
	points: number;
	problems_solved: number;
}
