import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TestService } from '../_service/test.service';
import { testModel } from '../_model/test.model';
@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  @Input() name_resource: string; 

  qs: string;
  id = this.route.snapshot.paramMap.get('id');
  tests: testModel[];
  constructor(
    private testService: TestService,
    public route: ActivatedRoute,
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

  add(){
    document.getElementById("add-test").style.height="400px"
  }
  handle(e){
    document.getElementById("add-test").style.height=e
    this.getTests()
  }


}
