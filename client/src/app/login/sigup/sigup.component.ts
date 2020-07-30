import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SigupComponent implements OnInit {

  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;

  constructor(
   public userService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  signup(){
    let signup : User = {
      First_Name: this.firstname,
      Last_Name : this.lastname,
      username: this.username,
      hash: this.password,
    };
    if(this.firstname == null || this.lastname == null || this.username == null || this. password == null ){
      alert("Please don't input null")
    }
    else{
      this.userService.signup(signup).subscribe(data =>{
        console.log()
        alert("Add success")
       });
    }
    
  }

}
