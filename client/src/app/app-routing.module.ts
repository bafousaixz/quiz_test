import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  {
    path: '', 
    redirectTo: '/auth', 
    pathMatch: 'full', 
  },

  {
    path: 'tests/:id',
    loadChildren: ()=> import('./tests/tests.module').then(m => m.TestsModule)
  },

  {
    path: 'auth',
    loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'profile',
    loadChildren: ()=> import('./profile/profile.module').then(m=>m.ProfileModule)
  },

  {
    path: 'resources',
    loadChildren: ()=> import('./test-kits/test-kits.module').then(m => m.TestKitsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
