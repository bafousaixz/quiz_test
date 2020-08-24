import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  qs: string
  constructor() { }

  ngOnInit(): void {
  }

  Edit(){
    this.qs = "1"
  }


}
