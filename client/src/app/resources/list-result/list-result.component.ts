import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TestModel } from 'src/app/middle/models/test.model';
import { TestResult } from 'src/app/middle/models/test_result';
import { TestService } from 'src/app/middle/services/test.service';
import { TestResultService } from 'src/app/middle/services/test-result.service';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})

export class ListResultComponent implements OnInit {
  
  choose: any[];
  test: TestModel;
  results: TestResult[];
  questions: any[] = [];
  popup: boolean = false;
  id: string = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private testResultService: TestResultService,
  ) { }

  ngOnInit(): void {
    this.getResult();
    this.getTestdetail();
  }

  getTestdetail() {
    this.testService.getDetail(this.id).subscribe((data) => {
      this.test = data;
    })
  }
  
  getResult() {
    this.testResultService.getResult(this.id).subscribe((data) => {
      this.results = data;
    })
  }

  getResultDetail(id: string) {
    this.testResultService.getdetail(id).subscribe((data) => {
      this.questions = data.test.questionList;
      this.choose = data.choose_answer;
      for(let i = 0; i<this.questions.length; i++) {
        for(let j = 0; j<this.choose.length; j++) {
          if(i === j) {
            this.questions[i].choose_answer = this.choose[j];
          }
        }
      }
      this.popup = true;
    })
  }

  close() {
    this.popup = false;
  }

}