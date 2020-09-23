import { TestQuestionModel } from './test_question.model';

export class TestModel {
    _id: string;
    name: string;
    time?: number;
    amount?: number;
    easy?: number;
    medium?: number;
    high?: number;
    password?: string;
    resource_id?: string;
    questionList?: TestQuestionModel[];
}