import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MiddleModule } from './middle/middle.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from  './component/component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MiddleModule,
    BrowserModule,
    ComponentModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
