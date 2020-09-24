import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TestModel } from 'src/app/middle/models/test.model';
import { TestResult } from 'src/app/middle/models/test_result';
import { TestQuestionModel } from 'src/app/middle/models/test_question.model';
import { TestResultService } from 'src/app/middle/services/test-result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['../exam/exam.component.css', './result.component.css']
})
export class ResultComponent implements OnInit {
  
  check: boolean = false;
  id: string;
  user: string;
  choose: any[];
  test: TestModel;
  result: TestResult;
  questions: TestQuestionModel[];

  constructor(
    private route: ActivatedRoute,
    private testResultService: TestResultService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.get();
  }

//get result after test
  get() {
    this.testResultService.getdetail(this.id).subscribe(data => {
      this.result = data;
      this.questions = data.test.questionList;
      this.choose = data.choose_answer;
      for(let i = 0; i < this.questions.length; i++) {
        for(let j = 0; j < this.choose.length; j++) {
          if(i === j) {
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
