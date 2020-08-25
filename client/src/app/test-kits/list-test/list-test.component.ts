import { Component, OnInit } from '@angular/core';

import { TestService } from '../_service/test.service';
import { testModel } from '../_model/test.model';
@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  qs: string;
  tests: testModel[];
  constructor(
    private testService: TestService,
  ) { }

  ngOnInit(): void {
    this.getTests();
  }

  getTests(){
    this.testService.getTest().subscribe(data=>{
      this.tests = data;
    })
  }

  deleteTest(id: string){
    this.testService.deleteTest(id).subscribe()
    this.getTests()
  }


  Edit(){
    this.qs = "1"
  }


}
