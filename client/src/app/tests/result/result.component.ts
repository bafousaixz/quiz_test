import { Component, OnInit } from '@angular/core';
import { TestResultService } from '../_service/test-result.service';
import { testResult } from '../_model/test_result';
import { testModel } from '../../test-kits/_model/test.model';

import { TestService } from '../../test-kits/_service/test.service';
import { ActivatedRoute } from '@angular/router';
import { test_questionModule } from 'src/app/test-kits/_model/test_question';

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
  questions: test_questionModule[]
  _id: string = this.route.snapshot.paramMap.get('id');
  constructor(
    private testResultService: TestResultService,
    private service: TestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.testResultService.getdetail(this._id).subscribe(data=>{
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
      console.log(this.questions)
    })
  }

  handle(e){
    this.user = e
  }

  detail(){
    this.check = true
  }

}
