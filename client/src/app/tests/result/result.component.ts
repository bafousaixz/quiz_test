import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TestResultService } from 'src/app/middle/services/test-result.service';
import { TestResult } from 'src/app/middle/models/test_result';
import { TestModel } from 'src/app/middle/models/test.model';
import { TestQuestionModel } from 'src/app/middle/models/test_question.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['../exam/exam.component.css', './result.component.css']
})
export class ResultComponent implements OnInit {
  check: boolean = false;
  user: string;
  result: TestResult;
  test: TestModel;
  choose: any[];
  questions: TestQuestionModel[];
  _id: string = this.route.snapshot.paramMap.get('id');

  constructor(
    private testResultService: TestResultService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.testResultService.getdetail(this._id).subscribe(data =>{
      this.result = data;
      this.questions = data.test.questionList;
      this.choose = data.choose_answer;
      for(let i = 0; i < this.questions.length; i++){
        for(let j = 0; j < this.choose.length; j++){
          if(i === j){
            this.questions[i].choose_answer = this.choose[j];
          }
        }
      }
    })
  }

  handle(e) {
    this.user = e;
  }

  detail() {
    this.check = true;
  }

}
