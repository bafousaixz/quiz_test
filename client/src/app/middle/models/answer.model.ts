export class AnswerModel {
    _id: string;
    content: string;
    right: boolean; 
    question_id: string;
    resource_id?: string;
}