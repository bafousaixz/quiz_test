import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './profile/profile.module'
import { LoginModule } from './login/login.module';
import { TestKitsModule } from  './test-kits/test-kits.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { FooterComponent } from './component/footer/footer.component';
import { UsersService } from 'src/app/login/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProfileModule,
    TestKitsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
