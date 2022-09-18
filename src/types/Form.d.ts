import { type } from "os";

export type SummaryForm = {
    title: string;
    description: string;
    author: User;
}

export type Question = {
    title: string;
    options: QuestionOption[];
}

export type QuestionOption = {
    text: string;
    answer: boolean;
}