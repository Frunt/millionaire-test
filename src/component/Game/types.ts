export type IQuestion = {
    question: string;
    content: string[];
    correct: number[];
    money: number;
}

export type IQuestionData = {
    questions: IQuestion[];
}