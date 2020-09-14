import { Component, OnInit } from '@angular/core';
import { TestResultService } from 'src/app/middle/service/test-result.service';
import { ActivatedRoute } from '@angular/router';
import { testResult } from 'src/app/middle/model/test_result';
import { TestService } from 'src/app/middle/service/test.service';
import { testModel } from 'src/app/middle/model/test.model';
@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent implements OnInit {
  popup: boolean = false;
  _id: string = this.route.snapshot.paramMap.get('id');
  results: testResult[];
  questions: any[]= [];
  test: testModel;
  choose: any[];
  constructor(
    private testResultService: TestResultService,
    private service: TestService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTestdetail()
    this.getResult()
  }

  getTestdetail(){
    this.service.getDetail(this._id).subscribe(data=>{
      this.test= data
    })
  }
  
  getResult(){
    this.testResultService.getResult(this._id).subscribe(data=>{
      this.results = data
    })
  }

  getResultDetail(id: string){
    this.testResultService.getdetail(id).subscribe(data=>{
      this.questions = data.test.questionList
      this.choose = data.choose_answer
      for(let i=0; i<this.questions.length; i++){
        for(let j =0; j<this.choose.length; j++){
          if(i===j){
            this.questions[i].choose_answer = this.choose[j]
          }
        }
      }
      this.popup = true
    })
  }

  close(){
    this.popup = false
  }

}
