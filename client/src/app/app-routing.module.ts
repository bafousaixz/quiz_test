import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { KitsComponent } from './test-kits/kits/kits.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'test-kits',
    component: KitsComponent
  },

  {
    path: '**', 
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
