import { Component, OnInit } from '@angular/core';
import { Signin } from '../signin.model';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SiginComponent implements OnInit {

  public username: string
  public password: string

  constructor(
    private service: UsersService,
  ) { }

  ngOnInit(): void {
  }

  signin(){
    let signin : Signin = {
      username: this.username,
      hash : this.password,
    };
    if(this.username == null || this.password == null){
      alert("Please don't input null")
    }
    else{
      this.service.signin(signin).subscribe(data =>{
        window.localStorage.setItem('token', data['token'])
        console.log(data['token']);
        alert("success")
       });
    }
    
  }



}
