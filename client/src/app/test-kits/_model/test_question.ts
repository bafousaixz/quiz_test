import { answerModel } from './answer.model'
export class test_questionModule{
    _id: string;
    test_id: string;
    questions: {
        _id: string,
        Content: string,
        Img: string,
        answerList?: answerModel[]
    };
    choose_answer?: string

}