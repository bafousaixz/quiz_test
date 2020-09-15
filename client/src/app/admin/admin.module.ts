import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ComponentModule } from '../component/component.module';
import { RouterModule } from '@angular/router';
import { MiddleModule } from '../middle/middle.module'
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    AdminComponent,
    ListUserComponent,
    CreateUserComponent
    ],
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule,
    MiddleModule
  ]
})
export class AdminModule { }
