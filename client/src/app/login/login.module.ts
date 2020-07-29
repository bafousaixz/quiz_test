import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';



@NgModule({
  declarations: [LoginComponent, SiginComponent, SigupComponent],
  imports: [
    CommonModule,
  ]
})
export class LoginModule { }
