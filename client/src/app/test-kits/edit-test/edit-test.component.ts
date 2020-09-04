import { Component, OnInit, Input } from '@angular/core';
import { test_questionModule } from '../_model/test_question';
import { TestQuestionService } from '../_service/test-question.service';
import { QuestionService } from '../_service/question.service';
import { questionModel } from '../_model/question.model';
import { TestService } from '../_service/test.service';
import { testModel } from '../_model/test.model';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id');
  popup: boolean = false;
  test: testModel;
  _id: string
  name_test: string
  test_question: test_questionModule[] = []
  q: test_questionModule
  questions: questionModel[]=[]
  
 
  constructor(
    public route: ActivatedRoute,
    private serviceTestQuestion: TestQuestionService,
    public questionService: QuestionService,
    private testService: TestService,
  ) { }

  ngOnInit(): void {
    this.get();
    this.getTest();
  }

  get(){
    this.serviceTestQuestion.getDetail(this.id).subscribe(data=>{
      this.test_question = data
    })
  }

  getQuestion(){
    this.questionService.getQuestion().subscribe((data: any[]) =>{
      data = data.filter(x => !this.test_question.some(q => q.questions.Content === x.Content));
      return this.questions = data
    })
  }

  getTest(){
    this.testService.getDetail(this.id).subscribe(data=>{
      this.test= data
    })
  }

  put(qs: questionModel){
    const { _id, ...x} = qs;
    let question_test : test_questionModule ={
      _id: this.q._id,
      test_id: this.id,
      questions: qs
    }
    this.serviceTestQuestion.putTest_question(question_test).subscribe(data=>{
      if(data!=null){
        this.cancer();
        this.get();
      }
    });
}

  edit(question: test_questionModule, content: string){
    this.q = question
    this.name_test = content
    this.popup = true
    this.getQuestion()
  }

  cancer(){
    this.popup = false
  }
}
