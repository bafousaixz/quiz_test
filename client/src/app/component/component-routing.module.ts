import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


const ComponentRoutes: Routes = [ 

    {
        path: '***', 
        component: ErrorComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(ComponentRoutes)],
    exports: [RouterModule]
  })

export class ComponentRoutingModule { }