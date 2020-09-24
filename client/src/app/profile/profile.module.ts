import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiddleModule } from '../middle/middle.module';
import { ProfileComponent } from './profile/profile.component';
import { ComponentModule } from '../component/component.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MiddleModule,
    ComponentModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
