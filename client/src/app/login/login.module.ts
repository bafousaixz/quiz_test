import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginDirective } from './_directive/login.directive';

@NgModule({
  declarations: [
    LoginDirective, 
    LoginComponent, 
    SignupComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
  ],
  providers: []
  
})
export class LoginModule { }
