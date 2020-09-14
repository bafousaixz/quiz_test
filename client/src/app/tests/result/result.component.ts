import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TestResultService } from 'src/app/middle/service/test-result.service';
import { testResult } from 'src/app/middle/model/test_result';
import { testModel } from 'src/app/middle/model/test.model';
import { TestService } from 'src/app/middle/service/test.service';
import { test_questionModel } from 'src/app/middle/model/test_question.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['../exam/exam.component.css', './result.component.css']
})
export class ResultComponent implements OnInit {
  check: boolean = false
  user: string
  result: testResult
  test: testModel
  choose: any[]
  questions: test_questionModel[]
  _id: string = this.route.snapshot.paramMap.get('id');
  constructor(
    private testResultService: TestResultService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.testResultService.getdetail(this._id).subscribe(data=>{
      console.log(data)
      this.result = data
      this.questions = data.test.questionList
      this.choose = data.choose_answer
      for(let i=0; i<this.questions.length; i++){
        for(let j =0; j<this.choose.length; j++){
          if(i===j){
            this.questions[i].choose_answer = this.choose[j]
          }
        }
      }
    })
  }

  handle(e){
    this.user = e
  }

  detail(){
    this.check = true
  }

}
