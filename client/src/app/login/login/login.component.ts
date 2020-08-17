import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin : boolean = true;
  signup : boolean = false;

  ngOnInit(): void {
  }

 constructor(
   private router :Router
 ) { }


 kt1(){
   this.signin = true;
   this.signup = false;
 }
 kt2(){
   this.signin = false;
   this.signup = true;
 }
}
