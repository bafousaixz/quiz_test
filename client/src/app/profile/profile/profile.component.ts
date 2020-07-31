import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../login/users.service';
import { User } from '../../login/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public token = localStorage.getItem('token')
  public user: User;

  public username: string
  
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    if(this.token != null ){
      this.userService.getUser().subscribe(data=>{
        this.user = data;
        console.log(typeof(this.user.First_Name))
       })
    }
  }


}
