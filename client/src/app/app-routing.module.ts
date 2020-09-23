import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  {
    path: 'resources',
    loadChildren: ()=> import('./test-kits/test-kits.module').then(m => m.TestKitsModule)
  },

  {
    path: 'tests/:id',
    loadChildren: ()=> import('./tests/tests.module').then(m => m.TestsModule)
  },

  {
    path: 'profile',
    loadChildren: ()=> import('./profile/profile.module').then(m=>m.ProfileModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
