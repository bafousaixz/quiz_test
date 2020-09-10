import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

import { TestService } from 'src/app/middle/service/test.service';
import { testModel } from 'src/app/middle/model/test.model';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  @Input() resource: string; 
  @Output() OutputValue = new EventEmitter();

  test: testModel;
  id =''
  _id: string;
  set: number ;
  amount: number;
  time: number;
  easy: number;
  medium: number;
  high: number;
  name: string;
  resource_id = this.route.snapshot.paramMap.get('id');

  min: number = 1;
  max: number = 10;
  options: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    hideLimitLabels: true,
    hidePointerLabels: true,
    showSelectionBar: false,
    noSwitching: true,
    showOuterSelectionBars: true,
  };
  
  constructor(
    private testService: TestService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  createTest(){
    this.easy = this.min;
    this.medium = this.max - this.min;
    this.high = this.amount - this.max;
    const name_test: string = this.resource + "- " + this.name
    let test: testModel ={
      _id: this._id,
      name: name_test,
      time: this.time,
      amount: this.amount,
      easy: this.min,
      medium: this.max - this.min,
      high: this.amount - this.max,
      resource_id: this.resource_id
    }
    if(name !== null && this.amount !=null){
      this.testService.postTest(test).subscribe(data=>{
        if(data!=null){
          this.testService.getTest().subscribe(data=>{
            this.test = data[data.length -1]
            this.router.navigate([this.test._id], { relativeTo: this.route });
          })
          this.close()
        }
      }); 
    }
    else{
      alert('error')
    }
  }

  setNewCeil(newCeil: number){
    this.max=newCeil-1
    const newOptions: Options = Object.assign({}, this.options);
    newOptions.ceil = newCeil;
    this.options = newOptions;
    document.getElementById("add-test1").style.height="420px"
    document.getElementById("slider").style.height="100px";
    document.getElementById("slider").style.opacity="1";
  }

  close(){
    document.getElementById("add-test1").style.height="50px"
    document.getElementById("slider").style.height="0px";
    document.getElementById("slider").style.opacity="0";
    document.getElementById("btn-add").style.opacity="1"
    this.OutputValue.emit("close");
    this.name = "";
    this.time = null;
    this.amount= null;
  }

  add(){
    document.getElementById("add-test1").style.height="320px"
    document.getElementById("btn-add").style.opacity="0"
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
