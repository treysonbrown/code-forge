
export type AnswerProp = {
	answerName: string;
	correct: boolean;
}

export type RunnerUpProps = {
	place: number;
	username: string;
	bgColor: string;
}

export type Problem = {
	question: string;
	description: string;
	course_id: number;
	difficulty: string
}
