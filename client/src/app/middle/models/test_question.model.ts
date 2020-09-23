import { AnswerModel } from './answer.model'
export class TestQuestionModel{
    _id: string;
    test_id: string;
    questions: {
        _id: string,
        content: string,
        image: string,
        answerList?: AnswerModel[]
    };
    choose_answer?: string;
}