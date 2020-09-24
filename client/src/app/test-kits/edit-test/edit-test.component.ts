import { Component, OnInit } from '@angular/core';
import { TestQuestionModel } from 'src/app/middle/models/test_question.model';
import { TestQuestionService } from 'src/app/middle/services/test-question.service';
import { QuestionService } from '../_services/question.service';
import { QuestionModel } from '../_models/question.model';
import { TestService } from 'src/app/middle/services/test.service';
import { TestModel } from 'src/app/middle/models/test.model';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  id: string = this.route.snapshot.paramMap.get('id');
  popup: boolean = false;
  test: TestModel;
  _id: string;
  nameTest: string;
  content: string;
  testQuestion: TestQuestionModel[] = [];
  q: TestQuestionModel;
  questions: QuestionModel[] = [];
  
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

  get() {
    this.serviceTestQuestion.getDetail(this.id).subscribe(data => {
      this.testQuestion = data;
    })
  }

  getQuestion() {
    this.questionService.getQuestion().subscribe((data: any[]) => {
      data = data.filter((x) => !this.testQuestion.some((q) => q.questions.content === x.content));
      return this.questions = data;
    })
  }

  getTest() {
    this.testService.getDetail(this.id).subscribe(data => {
      this.test = data;
    })
  }

  put(qs: QuestionModel) {
    let questionTest : TestQuestionModel = {
      _id: this.q._id,
      test_id: this.id,
      questions: qs,
    }
    this.serviceTestQuestion.putTestQuestion(questionTest).subscribe(data => {
      if(data) {
        this.close();
        this.get();
      }
    });
}

  edit(question: TestQuestionModel, content: string) {
    this.q = question;
    this.nameTest = content;
    this.popup = true;
    this.getQuestion();
  }

  close(){
    this.popup = false;
  }
}
