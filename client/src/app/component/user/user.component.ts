import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UppercasePipe } from 'src/app/middle/uppercase.pipe';
import { LoginService } from '../../login/_service/login.service';
import { Router } from '@angular/router';
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
  token = localStorage.getItem("token")
  
  constructor(
    public userService: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    if(this.token != null){
      this.userService.getUser().subscribe(data=>{
        this.avatar = data.image
        this.name = data.lastName
        this.userName = data.username
        this.OutputValue.emit(data._id)
       })
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.userName = "";
    this.router.navigate(['/login']);
  }
}
