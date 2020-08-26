import { Component, OnInit, Input } from '@angular/core';
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
  @Input() name_resource: string; 
  set: number ;
  amount: number;
  name: string;
  
  resource_id = this.route.snapshot.paramMap.get('id');
  result: [];
  high: number = 0;
  easy: number = 0;
  easy_options: Options = {
    floor: 0,
    ceil: 50,
    hideLimitLabels:  true,
    getPointerColor: (value: number): string => {
      return '#2AE02A';
      }
    };

  medium: number = 0;
  medium_options: Options = {
    floor: 0,
    ceil: 50,
    hideLimitLabels:  true,
    rightToLeft: true,
    getPointerColor: (value: number): string => {
      return '#9980FA';
      }
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
    const name_test: string = this.name_resource + "- " + this.name
    let test: testModel ={
      name: name_test,
      amount: this.amount,
      resource_id: this.resource_id
      // result: this.result
    }
    if(name !== null && this.amount !=null){
      this.testService.postTest(test).subscribe();
      document.getElementById("pupup-done").style.opacity="1"
    }
    else{
      alert('error')
    }
  }


 
  setting(){
    if(this.amount <= 0 || this.amount == null){
      this.set = 1
    }
    else{
      this.set = 2
    }
    console.log(this.set)
    this.easy_options.ceil = this.amount;
    this.medium_options.ceil = this.amount;
  }
  reload(){
    window.location.reload()
  }

}
