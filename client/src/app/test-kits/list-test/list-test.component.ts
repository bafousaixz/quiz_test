import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

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
      console.log(this.tests)
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
    document.getElementById("add-test1").style.height="450px"
  }
  handle(e){
    document.getElementById("add-test1").style.height=e
    this.getTests()
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    let a = document.getElementById("set-scroll").style;
    let b = document.getElementById("add-test1").style;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      a.position = "fixed";
      a.paddingRight="30%";
      b.width="91%";
    } else {
      a.paddingRight="0";
      a.position = "relative";
      b.width="98%";
    }
  } 


}
