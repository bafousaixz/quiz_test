import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './profile/profile.module'
import { LoginModule } from './login/login.module';
import { TestKitsModule } from  './test-kits/test-kits.module';
import { ComponentModule } from  './component/component.module';
import { TestsModule } from './tests/tests.module';

import { AppComponent } from './app.component';
import { UsersService } from 'src/app/login/users.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProfileModule,
    TestKitsModule,
    ComponentModule,
    TestsModule,
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
