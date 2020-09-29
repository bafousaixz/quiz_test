import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const LoginRoutes: Routes = [ 
    {
        path: '',
        component: LoginComponent,
        children:[
            {
                path: 'signup',
                component: SignupComponent,
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
  })

export class LoginRoutingModule { }