import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../login/users.service';
import { User } from '../../login/user.model';
import { HttpClient} from '@angular/common/http'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileUser: FormGroup;

  public token = localStorage.getItem('token')
  public user: User;

  public username: string
  public password: string
  public image: string
  public avatar: string

  public profile1: boolean = true
  public base64textString = [];
  constructor(
    private userService: UsersService,
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.get()
    this.user
    this.initForm()
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
  }


  get(){
    if(this.token != null ){
      this.userService.getUser().subscribe(data=>{
        this.avatar= data.Image
        this.user = data;
        // console.log(this.user)
       })
    }
  }

  initForm(){
    this.profileUser = this.fb.group({
      'firstname': '' ,
      'lastname' : '',
      'username' : '',
      'email' : '',
      'tel' : '',
    });
  }

  onUpload(){
    let profile : User = {
      First_Name: this.profileUser.value.firstname,
      Last_Name : this.profileUser.value.lastname,
      username: this.username,
      hash: this.password,
      Email: this.profileUser.value.email,
      Tel: this.profileUser.value.tel,
      Image: this.image
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
