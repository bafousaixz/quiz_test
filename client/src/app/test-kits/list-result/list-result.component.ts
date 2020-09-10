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

  _id: string = this.route.snapshot.paramMap.get('id');
  results: testResult;
  test: testModel;
  users: any[] = [];
  constructor(
    private testResultService: TestResultService,
    private service: TestService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getdetail()
    this.get()
  }

  getdetail(){
    this.service.getDetail(this._id).subscribe(data=>{
      this.test= data
    })
  }
  
  get(){
    this.testResultService.getResult().subscribe(data=>{
      this.results = data.result
      this.users = data.user
    })
  }

}
