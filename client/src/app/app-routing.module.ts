import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ResourcesComponent } from './test-kits/resources/resources.component';
import { ResourceComponent } from './test-kits/resource/resource.component';

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
    path: 'test-resources',
    component: ResourcesComponent
  },

  {
    path: 'test-resources/:id',
    component: ResourceComponent
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
