import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { testModel } from 'src/app/middle/model/test.model';
import { testResult } from 'src/app/middle/model/test_result';
import { TestResultService } from 'src/app/middle/service/test-result.service';

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
  answer_right: number = 0
  s: number = 0
  r: testResult
  constructor(
    private testResultService: TestResultService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.score()
      let result: testResult = {
        test_id: this.test._id,
        user_id: this.user,
        choose: this.choose_answer,
        answer_right: this.answer_right,
        score: this.s
      }
    this.testResultService.postResult(result).subscribe(data=>{
      if(data){
        this.testResultService.getResult().subscribe(data=>{
          if(data){
            this.r = data.result[data.result.length -1]
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
              this.answer_right +=1
            }
          });
        }
      }) 
    });
    this.s = (10.0 / this.test.questionList.length) * this.answer_right
  }

  handleEvent(e){
    let a = document.getElementById('countdown').style
    if(e.action === 'notify'){
      a.background='#F79F1F'
      a.color = '#ffffff'
    }
    if(e.action === 'done'){
      this.onSubmit()
    }
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
