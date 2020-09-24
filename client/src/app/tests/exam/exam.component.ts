import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TestModel } from 'src/app/middle/models/test.model';
import { TestService } from 'src/app/middle/services/test.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  
  id: string;
  user: string;
  name: string;
  test: TestModel;
  password: string;
  show: boolean = false;
  popup: boolean = false;
  start: boolean = false;

  constructor(
    private testService: TestService,
    public router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.getTittle();
  }

  getTittle() {
    this.testService.getTittle(this.id).subscribe(data =>{
      this.test = data;
    })
  }

  checkPassword(){
    let test: TestModel = {
      _id: this.id,
      name: this.test.name,
      password: this.password,
    }
    this.testService.checkPassword(test).subscribe(data =>{
      if(data){
        this.popup = false;
        this.start = true;
      }
      if(data === null){
        this.password ='';
        document.getElementById('check-pass').style.opacity = '1';
        setTimeout(() =>{
          document.getElementById('check-pass').style.opacity = '0';
        }, 2000)
      }
    })
  }

  handle(e) {
    this.user = e;
  }

  openPopup() {
    this.popup = true;
  }

  viewPass() {
    this.show = !this.show;
  }

  closePupup() {
    this.popup = false;
  }
}
