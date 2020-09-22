import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ResourcesComponent } from './test-kits/resources/resources.component';
import { ResourceComponent } from './test-kits/resource/resource.component';
import { QuestionsComponent } from './test-kits/questions/questions.component';
import { ListTestComponent } from './test-kits/list-test/list-test.component';
import { EditTestComponent } from './test-kits/edit-test/edit-test.component';
import { ListResultComponent } from './test-kits/list-result/list-result.component';
import { ExamComponent} from './tests/exam/exam.component';
import { ResultComponent } from './tests/result/result.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { SiginComponent } from './login/sigin/sigin.component';
import { SigupComponent } from './login/sigup/sigup.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: SiginComponent,
  },
  {
    path: 'signup',
    component: SigupComponent,
  },


  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'resources',
    component: ResourcesComponent
  },

  {
    path: 'resources/:id',
    component: ResourceComponent,
    children: [
      {
        path: '',
        component: QuestionsComponent
      },
      {
        path: 'questions',
        component: QuestionsComponent
      },
      {
        path: 'tests',
        component: ListTestComponent
      },
      {
        path: 'tests/:id',
        component: EditTestComponent
      },
      {
        path: 'tests/result/:id',
        component: ListResultComponent,
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path: 'list-user',
        component: ListUserComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
      }
    ]
  },
  
  {
    path: 'tests/:id',
    component: ExamComponent
  },
  {
    path: 'tests/:id/:id',
    component: ResultComponent
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
