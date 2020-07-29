import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public check1 : boolean = true;
  public check2 : boolean = false;

  ngOnInit(): void {
  }

 constructor(
   private router :Router
 ) { }


 kt1(){
   this.check1 = true;
   this.check2 = false;
   console.log(this.check1)
 }
 kt2(){
   this.check1 = false;
   this.check2 = true;
   console.log(this.check1)
 }
}
