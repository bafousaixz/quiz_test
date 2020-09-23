import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './_services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginDirective } from './_directive/login.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginDirective, 
    LoginComponent, 
    SignupComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService,
  ]
  
})
export class LoginModule { }
