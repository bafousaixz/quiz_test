import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    FooterComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UserComponent
  ],
})
export class ComponentModule { }
