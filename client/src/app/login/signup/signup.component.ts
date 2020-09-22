import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user.model';
import { LoginService } from '../_service/login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login/login.component.css']
})
export class SignupComponent implements OnInit {

  firstName: string = 'le';
  lastName: string;
  userName: string;
  password: string;
  role: number = 3;
  image: string = "https://res.cloudinary.com/heymarketer/image/upload/dpr_auto,w_auto,f_auto,q_auto:good/v1553089040/Testimonials/undraw_profile_pic_ic5t.svg";

  constructor(
   public userService: LoginService,
   public router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(){
    let s : User = {
      firstName: this.firstName,
      lastName : this.lastName,
      username: this.userName,
      password: this.password,
      role: this.role,
      image: this.image
    };
    this.userService.signUp(s).subscribe(data =>{
      if(data){
        window.localStorage.setItem('token', data['token'])
        this.router.navigate(['/resources']);
      }
    });
  }

}
