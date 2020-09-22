import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { UsersService } from './users.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginDirective } from './login.directive';


@NgModule({
  declarations: [LoginComponent, SiginComponent, SigupComponent, LoginDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule

  ],
  providers: [
    UsersService,
  ]
  
})
export class LoginModule { }
