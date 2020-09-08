import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UsersService } from '../../login/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() OutputValue = new EventEmitter();
  username:string;
  name: string;
  avatar:string;
  token = localStorage.getItem("token")
  
  constructor(
    public userService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.get();
    
  }

  get(){
    if(this.token != null){
      this.userService.getUser().subscribe(data=>{
        this.avatar = data.Image
        this.name = data.Last_Name
        this.username = data.username
        this.OutputValue.emit(data._id)
       })
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.username = "";
    this.router.navigate(['/']);
  }
}
