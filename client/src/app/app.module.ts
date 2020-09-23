import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ComponentModule } from  './component/component.module';
import { MiddleModule } from './middle/middle.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ComponentModule,
    MiddleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
