import { Component, OnInit } from '@angular/core';
import { Signin } from '../signin.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  username: string
  password: string
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    let signin : Signin = {
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
