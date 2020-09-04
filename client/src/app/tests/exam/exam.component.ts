import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TestService } from '../../test-kits/_service/test.service';
import { testModel } from '../../test-kits/_model/test.model';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  user: string;
  start: boolean = false
  _id: string = this.route.snapshot.paramMap.get('id');
  test: testModel;
  constructor(
    private route: ActivatedRoute,
    private service: TestService,
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.service.getDetail(this._id).subscribe(data=>{
    this.test= data
    })
  }

  handle(e){
    console.log(e)
  }
  onClick(){
    this.start=true
  }
}
