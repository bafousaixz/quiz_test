import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/middle/models/user.model';
import { LoginService } from 'src/app/middle/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  token = localStorage.getItem('token');
  user: UserModel;
  image: string;
  avatar: string;
  base64textString = [];
  profile1: boolean = true;

  constructor(
    private userService: LoginService,
  ) { }

  ngOnInit(): void {
    this.get();
  }

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

  get(){
    if(this.token){
      this.userService.getUser().subscribe(data => {
        this.avatar = data.image;
        this.user = data;
       })
    }
  }

  onUpload(){
    let profile : UserModel = {
      firstName: this.user.firstName,
      lastName : this.user.lastName,
      username: this.user.username,
      password: this.user.password,
      email: this.user.email,
      tel: this.user.tel,
      image: this.user.image,
    };
    this.userService.editProfile(profile).subscribe(data => {
      window.location.reload();
      this.profile1 = false;
    })
  }

  profile(){
    this.profile1 = true;
  }
  edit(){
    this.profile1 = false;
  }

}
