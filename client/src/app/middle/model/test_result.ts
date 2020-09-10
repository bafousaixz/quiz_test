import { testModel } from './test.model';

export class testResult {
    _id?: string;
    user_id: string;
    test_id: string;
    answer_right: number;
    score: number;
    name?: string;
    choose?: {};
    test?: testModel;
}