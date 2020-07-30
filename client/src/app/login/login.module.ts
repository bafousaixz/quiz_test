import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { UsersService } from './users.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent, SiginComponent, SigupComponent],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  providers: [
    UsersService,
    HttpClientModule,
  ]
  
})
export class LoginModule { }
