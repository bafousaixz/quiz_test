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
  check: boolean = false;
  url: string;
  password: string;
  _id: string;
  id = '';
  tests: testModel[];
  test: testModel;
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

  putTest(){
    let t : testModel = {
      _id: this.test._id,
      name: this.test.name,
      time: this.test.time,
      amount: this.test.amount,
      easy: this.test.easy,
      medium: this.test.medium,
      high: this.test.high,
      password: this.password,
      resource_id: this.test.resource_id,
      questionList: this.test.questionList
    }
    this.testService.putTest(t).subscribe(data=>{
      if(data){
        this.url = `http://localhost:4200/tests/${this.test._id}`
      }
    });
  }

  deleteTest(id: string){
    this.testService.deleteTest(id).subscribe()
    this.getTests()
  }

  getResource(){
    this.resourceService.getListResource(this.id).subscribe(data=>{
      this.name_resource = data.name
    })
  }

  getUrl(test: testModel){
    this.test = test
    this.check = true
  }

  coppyUrl(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    document.getElementById('coppied').style.opacity="1";
    setTimeout(() => {
      this.closePupup();
    }, 2000);
  }

  closePupup(){
    this.check = false
  }

  handle(e){
    this.getTests()
  } 
}
