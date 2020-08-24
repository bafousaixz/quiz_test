import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  set: number ;
  amount: number;
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

  
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.amount)
  }
 
  setting(){
    if(this.amount==0 || this.amount == null){
      this.set = 1
    }
    else{
      this.set = 2
    }
    console.log(this.set)
    this.easy_options.ceil = this.amount;
    this.medium_options.ceil = this.amount;
  }

}
