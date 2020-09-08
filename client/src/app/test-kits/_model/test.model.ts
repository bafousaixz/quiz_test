import { test_questionModule } from './test_question';

export class testModel {
    _id: string;
    name: string;
    time: number;
    amount: number;
    easy: number;
    medium: number;
    high: number;
    resource_id: string;
    questionList?: test_questionModule[]
    // result: [];
}