import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TestService } from 'src/app/middle/services/test.service';
import { TestModel } from 'src/app/middle/models/test.model';
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
  test: TestModel;
  constructor(
    private route: ActivatedRoute,
    private service: TestService,
  ) { }

  ngOnInit(): void {
    this.getTittle()
  }

  getTittle(){
    this.service.getTittle(this._id).subscribe(data=>{
    this.test = data
    })
  }


  checkPassword(){
    let test: TestModel ={
      _id: this._id,
      name: this.test.name,
      password: this.password,
    }

    this.service.checkPassword(test).subscribe(data=>{
      if(data){
        this.popup = false
        this.start = true
      }
      if(data === null){
        this.password ='';
        document.getElementById('check-pass').style.opacity = '1';
        setTimeout(()=>{
          document.getElementById('check-pass').style.opacity = '0';
        }, 2000)
      }
    })
  }

  handle(e){
    this.user = e
  }

  openPopup(){
    this.popup = true
  }

  viewPass(){
    // this.show = !this.show;
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
