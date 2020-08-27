import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { TestService } from '../_service/test.service';
import { testModel } from '../_model/test.model';
@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  @Input() resource: string; 
  @Output() OutputValue = new EventEmitter();

  set: number ;
  amount: number;
  easy: number;
  medium: number;
  high: number;
  name: string;
  resource_id = this.route.snapshot.paramMap.get('id');
  result: [];

  min: number = 0;
  max: number = 10;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    hideLimitLabels:  true,
    hidePointerLabels:  true,
    showSelectionBar: false,
    noSwitching: true,
    showOuterSelectionBars: true,
  };

  
  
  constructor(
    private testService: TestService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
   }

  ngOnInit(): void {
  
  }

  createTest(){
    this.easy = this.min;
    this.medium = this.max - this.min;
    this.high = this.amount - this.max;
    const name_test: string = this.resource + "- " + this.name
    let test: testModel ={
      name: name_test,
      amount: this.amount,
      resource_id: this.resource_id
      // result: this.result
    }
    if(name !== null && this.amount !=null){
      this.testService.postTest(test).subscribe();
     this.close()
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
  }

  close(){
    this.OutputValue.emit("0px");
    this.name = "";
    this.amount= null;
  }

}
