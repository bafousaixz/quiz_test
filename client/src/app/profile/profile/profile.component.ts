import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/_service/login.service';
import { User } from '../../login/_model/user.model';
import { HttpClient} from '@angular/common/http'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileUser: FormGroup;

  token = localStorage.getItem('token')
  user: User;

  username: string
  password: string
  firstname: string
  lastname: string
  email: string 
  tel: string
  image: string
  avatar: string

  profile1: boolean = true
  base64textString = [];
  constructor(
    private userService: LoginService,
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.get()
    this.user
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
    this.image = 'data:image/png;base64,' + btoa(e.target.result)
    console.log(this.image)
  }

  get(){
    if(this.token != null ){
      this.userService.getUser().subscribe(data=>{
        this.avatar= data.image
        this.user = data;
        console.log(this.user)
       })
    }
  }

  onUpload(){
    let profile : User = {
      firstName: this.user.firstName,
      lastName : this.user.lastName,
      username: this.user.username,
      password: this.user.password,
      email: this.user.email,
      tel: this.user.tel,
      image: this.user.image,
    };
    console.log(profile)
    this.userService.editProfile(profile).subscribe(data =>{
      window.location.reload()
      this.profile1=false;
    })
  }

  profile(){
    this.profile1=true;
  }
  edit(){
    this.profile1=false;
  }




}
