import { answerModel } from './answer.model'
export class test_questionModule{
    _id: string;
    test_id: string;
    questions: {
        Content: string,
        // answerList: answerModel[]
    };
}