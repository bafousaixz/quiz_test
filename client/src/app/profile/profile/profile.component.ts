import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/middle/models/user.model';
import { UserService } from 'src/app/middle/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  image: string;
  avatar: string;
  user: UserModel;
  base64textString = [];
  profile1: boolean = true;
  token = localStorage.getItem('token');

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    if(this.token){
      this.userService.getUser().subscribe((data) => {
        this.avatar = data.image;
        this.user = data;
       })
    }
  }

  editUser() {
    let profile: UserModel = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      tel: this.user.tel,
      image: this.image,
    };
    this.userService.editProfile(profile).subscribe((data) => {
      if(data) {
        this.profile1 = true;
      }
    })
  }

//handle UI
  profile() {
    this.profile1 = true;
  }

  edit() {
    this.profile1 = false;
  }

//handle image
  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  
  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.image = 'data:image/png;base64,' + btoa(e.target.result);
  }

}
