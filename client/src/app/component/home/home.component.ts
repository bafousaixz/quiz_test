import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../login/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public username:string;
  public avatar:string;
  public token = localStorage.getItem("token")
  
  constructor(
    public userService: UsersService,
    public router: Router
  ) { 
   
  }

  ngOnInit(): void {

    this.get();
    // console.log(this.username)
  }

  get(){
    if(this.token != null){
      this.userService.getUser().subscribe(data=>{
        this.avatar = data.Image
        this.username = data.Last_Name
       })
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.username = "";
    this.router.navigate(['/']);
  }

}
