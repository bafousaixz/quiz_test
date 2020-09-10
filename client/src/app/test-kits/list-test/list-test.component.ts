import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TestService } from 'src/app/middle/service/test.service';
import { testModel } from 'src/app/middle/model/test.model';
import { ResourceService } from  '../_service/resource.service';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  check: string;
  _id: string;
  id = '';
  tests: testModel[];
  name_resource='';

  constructor(
    private testService: TestService,
    private resourceService: ResourceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTests();
    this.route.parent.params.subscribe((param: Params) => {
      this.id = param['id'];
    });
    this.getResource();
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

  getResource(){
    this.resourceService.getReourceId(this.id).subscribe(data=>{
      this.name_resource = data.Name
    })
  }

  handle(e){
    this.getTests()
  } 
}
