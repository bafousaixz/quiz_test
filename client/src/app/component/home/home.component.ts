import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../login/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public userService: UsersService,
  ) { }

  ngOnInit(): void {
  }

}
