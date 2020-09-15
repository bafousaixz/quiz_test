import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/middle/service/user.service';
import { userModel } from 'src/app/middle/model/user.model';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: userModel[]
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.userService.getAll().subscribe(data=>{
      this.users = data
    })
  }

}
