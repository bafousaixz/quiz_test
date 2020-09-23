import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MiddleModule } from '../middle/middle.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { ComponentRoutingModule } from './component-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MiddleModule,
    ComponentRoutingModule,
  ],
  exports: [
    UserComponent
  ],
})
export class ComponentModule { }
