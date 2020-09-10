import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TestService } from 'src/app/middle/service/test.service';
import { testModel } from 'src/app/middle/model/test.model';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  popup: boolean = false
  show: boolean = false
  password: string
  user: string
  name: string
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
    this.user = e
  }

  checkPassword(){
    if(this.password === this.test.password){
      this.popup = false
      this.start = true
    }
    else{
      this.password ='';
      document.getElementById('check-pass').style.opacity = '1';
      setTimeout(()=>{
        document.getElementById('check-pass').style.opacity = '0';
      }, 2000)
      
    }
  }
  onClick(){
    this.popup = true
  }

  viewPass(){
    if(this.show === true){
      this.show = false
    }
    else{
      this.show = true
    }
  }

  closePupup(){
    this.popup = false
  }
}
