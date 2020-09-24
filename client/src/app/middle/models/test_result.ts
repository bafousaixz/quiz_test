import { TestModel } from './test.model';
import { UserModel } from './user.model';

export class TestResult {
    _id?: string;
    user_id: string;
    test_id: string;
    answer_right?: number;
    score?: string;
    name?: string;
    choose?: {};
    test?: TestModel;
    user?: UserModel;
}