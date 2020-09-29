import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MiddleModule } from '../middle/middle.module';
import { ErrorComponent } from './error/error.component';
import { ComponentRoutingModule } from './component-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    ErrorComponent,
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
