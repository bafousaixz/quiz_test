import { Router } from '@angular/router';
import { UserService } from 'src/app/middle/services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() OutputValue = new EventEmitter();
  name: string;
  avatar:string;
  userName:string;
  token = localStorage.getItem("token");
  
  constructor(
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    if(this.token) {
      this.userService.getUser().subscribe((data) => {
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
