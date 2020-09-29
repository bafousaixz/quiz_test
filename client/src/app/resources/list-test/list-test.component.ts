import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TestModel } from 'src/app/middle/models/test.model';
import { ResourceService } from  '../_services/resource.service';
import { TestService } from 'src/app/middle/services/test.service';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})

export class ListTestComponent implements OnInit {
  
  id = '';
  _id: string;
  url: string;
  test: TestModel;
  password: string;
  tests: TestModel[];
  check: boolean = false;
  nameResource: string = '';

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private resourceService: ResourceService,
  ) { }

  ngOnInit(): void {
    this.getTests();
    this.route.parent.params.subscribe((param: Params) => {
      this.id = param['id'];
    });
    this.getResource();
  }

  getTests() {
    this.testService.getTest().subscribe((data) => {
      this.tests = data;
    })
  }

  putTest() {
    let t: TestModel = {
      _id: this.test._id,
      name: this.test.name,
      password: this.password,
      resource_id: this.test.resource_id,
      questionList: this.test.questionList
    }
    this.testService.putTest(t).subscribe((data) => {
      if(data) {
        this.url = `http://localhost:4200/test/${this.test._id}`;
      }
    });
  }

  deleteTest(id: string) {
    this.testService.deleteTest(id).subscribe((data) => {
      if(data) {
        this.getTests();
      }
    });
  }

//get name resource
  getResource() {
    this.resourceService.getNameResource().subscribe((data) => {
      data.find((el) => {
        el._id === this.id
      })
      this.nameResource = data[0].name;
    })
  }

  getUrl(test: TestModel) {
    this.test = test;
    this.check = true;
  }

  coppyUrl(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    document.getElementById('coppied').style.opacity = "1";
    setTimeout(() => {
      this.closePopup();
    }, 2000);
  }

  closePopup() {
    this.check = false;
  }

  handle(e) {
    this.getTests();
  } 
}
