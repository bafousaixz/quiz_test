import { Component, OnInit } from '@angular/core';
import { Login } from '../_model/login.model';
import { LoginService } from '../_service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  constructor(
    private userService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    let signin : Login = {
      username: this.username,
      password : this.password,
    };
    this.userService.signIn(signin).subscribe(data =>{
      if(data){
        window.localStorage.setItem('token', data['token'])
        this.router.navigate(['/resources']);
      }
    })   
  }

}
