import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/middle/services/login.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() OutputValue = new EventEmitter();
  userName:string;
  name: string;
  avatar:string;
  token = localStorage.getItem("token");
  
  constructor(
    public router: Router,
    public userService: LoginService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    if(this.token) {
      this.userService.getUser().subscribe(data => {
        this.avatar = data.image;
        this.name = data.lastName;
        this.userName = data.username;
        this.OutputValue.emit(data._id);
       })
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.userName = "";
    this.router.navigate(['/']);
  }
}
