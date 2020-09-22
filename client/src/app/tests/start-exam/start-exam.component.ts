import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { testModel } from 'src/app/middle/model/test.model';
import { testResult } from 'src/app/middle/model/test_result';
import { TestResultService } from 'src/app/middle/service/test-result.service';
import { TestService } from 'src/app/middle/service/test.service';


@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  @Input() user;
  @Input() name;
  test: testModel = {} as any;
  choose : any[] = []
  index: string
  answer_right: number = 0
  s: string
  r: testResult
  _id: string = this.route.snapshot.paramMap.get('id');
  constructor(
    private testResultService: TestResultService,
    private service: TestService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTest()
  }

  getTest(){
    this.service.getDetail(this._id).subscribe(data=>{
      this.test = data
    })
  }
  
  getChoose(c: string){
    this.choose.push(c)
  }

  onSubmit(){
    let result: testResult = {
      test_id: this.test._id,
      user_id: this.user,
      choose: this.choose,
      name: this.name
    }
    this.testResultService.postResult(result).subscribe(data=>{
      if(data){
        this.testResultService.getAllResult().subscribe(data=>{
          if(data){
            this.r = data[data.length -1]
            this.router.navigate([this.r._id], { relativeTo: this.route });
          }
        })
      }
    })
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
