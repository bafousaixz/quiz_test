import { test_questionModel } from './test_question.model';

export class testModel {
    _id: string;
    name: string;
    time: number;
    amount: number;
    easy: number;
    medium: number;
    high: number;
    resource_id: string;
    questionList?: test_questionModel[]
    // result: [];
}