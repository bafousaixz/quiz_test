import { Component } from '@angular/core';
import { UsersService } from './login/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent {
  title = 'client';
  public username:string;
  public avatar:string;
  public token = localStorage.getItem("token")
  
  constructor(
    public userService: UsersService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.get();
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
