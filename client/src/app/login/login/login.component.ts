import { Component, OnInit } from '@angular/core';
import { Login } from '../_models/login.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  token = localStorage.getItem("token");

  constructor(
    private userService: LoginService,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.token){
      this.router.navigate(['/resources']);
    }
  }

  signIn(){
    let signin : Login = {
      username: this.username,
      password : this.password,
    };
    this.userService.signIn(signin).subscribe(data =>{
      if(data){
        window.localStorage.setItem('token', data['token']);
        this.router.navigate(['/resources']);
      }
    })   
  }

}
