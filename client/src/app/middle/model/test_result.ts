import { from } from 'rxjs';
import { testModel } from './test.model';
import { userModel } from './user.model';
export class testResult {
    _id?: string;
    user_id: string;
    test_id: string;
    answer_right?: number;
    score?: string;
    name?: string;
    choose?: {};
    test?: testModel;
    user?: userModel;
}