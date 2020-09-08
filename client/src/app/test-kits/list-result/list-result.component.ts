import { Component, OnInit } from '@angular/core';
import { TestResultService } from 'src/app/middle/service/test-result.service';
import { Router, ActivatedRoute } from '@angular/router';
import { testResult } from 'src/app/middle/model/test_result';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent implements OnInit {

  _id: string = this.route.snapshot.paramMap.get('id');
  result: testResult
  constructor(
    private testResultService: TestResultService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.get()
  }

  
  get(){
    this.testResultService.getdetail(this._id).subscribe(data=>{
      this.result = data
      console.log(data)
    })
  }

}
