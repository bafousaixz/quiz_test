import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/middle/models/user.model';
import { LoginService } from 'src/app/middle/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login/login.component.css']
})
export class SignupComponent implements OnInit {

  lastName: string;
  userName: string;
  password: string;
  image: string = "https://res.cloudinary.com/heymarketer/image/upload/dpr_auto,w_auto,f_auto,q_auto:good/v1553089040/Testimonials/undraw_profile_pic_ic5t.svg";

  constructor(
    public router: Router,
    public userService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    let s : UserModel = {
      lastName : this.lastName,
      username: this.userName,
      password: this.password,
      image: this.image
    };
    this.userService.signUp(s).subscribe((data) => {
      if(data) {
        window.localStorage.setItem('token', data['token'])
        this.router.navigate(['/resources']);
      }
    });
  }

}
