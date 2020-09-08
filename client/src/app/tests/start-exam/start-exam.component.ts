import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { testModel } from '../../test-kits/_model/test.model';
import { testResult } from '../_model/test_result';
import { TestResultService } from '../_service/test-result.service';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  @Input() user;
  
  @Input() set test(value: testModel) {
    this._test = value;
    if (value) {
      this.choose_answer = this.test.questionList.reduce((pre, cur) => {
        pre[cur._id] = '';
        return pre;
      }, {});
    }
  }
  _test: testModel = {} as any;
  choose_answer: {
    [questionId: string]: string;
  } = {};

  get test() {
    return this._test;
  }
  index: string
  s: number = 0
  r: testResult
  constructor(
    private testResultService: TestResultService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.test)
  }


  onSubmit(something){
    this.score()
      let result: testResult = {
        test_id: this.test._id,
        user_id: this.user,
        choose: this.choose_answer,
        score: this.s
      }
    this.testResultService.postResult(result).subscribe(data=>{
      if(data){
        this.testResultService.getResult().subscribe(data=>{
          if(data){
            this.r = data[data.length -1]
            this.router.navigate([this.r._id], { relativeTo: this.route });
          }
        })
      }
    })
  }

  score(){
    this.test.questionList.forEach(element => {
      element.questions.answerList.forEach(answer => {
        if(answer.Right===true){
          Object.values(this.choose_answer).forEach(choose => {
            if(choose===answer._id){
              this.s +=1
            }
          });
        }
      }) 
    });
    return this.s
  }


  scroll(i){
    document.getElementById(i).scrollIntoView();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    let b = document.getElementById("menu-test").style;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      b.position = "fixed";
      b.top="50px"
    } else {
      b.position = "absolute";
      b.top="110px"
    }
  } 

}
