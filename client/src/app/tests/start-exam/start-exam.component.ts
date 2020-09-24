import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestModel } from 'src/app/middle/models/test.model';
import { TestResult } from 'src/app/middle/models/test_result';
import { TestService } from 'src/app/middle/services/test.service';
import { TestResultService } from 'src/app/middle/services/test-result.service';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  @Input() user;
  @Input() name;
  id: string; 
  index: string;
  r: TestResult;
  choose: any[] = [];
  test: TestModel = {} as any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private testService: TestService,
    private testResultService: TestResultService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTest();
  }

  getTest() {
    this.testService.getDetail(this.id).subscribe(data =>{
      this.test = data;
    })
  }
  
//get answer choose push to choose array
  getChoose(c: string) {
    this.choose.push(c);
  }

  onSubmit() {
    let result: TestResult = {
      test_id: this.test._id,
      user_id: this.user,
      choose: this.choose,
      name: this.name
    }
    this.testResultService.postResult(result).subscribe(data => {
      if(data) {
        this.testResultService.getAllResult().subscribe(data => {
          if(data) {
            this.r = data[data.length - 1];
            this.router.navigate([`result/${this.r._id}`], { relativeTo: this.route });
          }
        })
      }
    })
  }

  handleEvent(e) {
    let a = document.getElementById('countdown').style;
    if(e.action === 'notify') {
      a.background='#F79F1F';
      a.color = '#ffffff';
    }
    if(e.action === 'done') {
      this.onSubmit();
    }
  }

  scroll(i) {
    document.getElementById(i).scrollIntoView();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    let b = document.getElementById("menu-test").style;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      b.position = "fixed";
      b.top="50px";
    } else {
      b.position = "absolute";
      b.top="110px";
    }
  } 

}
