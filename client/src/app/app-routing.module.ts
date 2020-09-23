import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { ResourcesComponent } from './test-kits/resources/resources.component';

const routes: Routes = [

  {
    path: 'resources',
    loadChildren: ()=> import('./test-kits/test-kits.module').then(m => m.TestKitsModule)
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
