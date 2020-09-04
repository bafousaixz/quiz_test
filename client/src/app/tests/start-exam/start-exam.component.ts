import { Component, OnInit, Input, HostListener } from '@angular/core';

import { testModel } from '../../test-kits/_model/test.model';
@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  @Input() test: testModel

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    let a = document.getElementById("set-scroll").style;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      a.position = "fixed";
    } else {
      a.position = "relative";
    }
  } 

}
