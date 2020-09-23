import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';


const TestRoutes: Routes = [ 

    {
        path: 'tests/:id',
        component: ExamComponent
    },
    {
        path: 'tests/:id/result/:id',
        component: ResultComponent
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(TestRoutes)],
    exports: [RouterModule]
  })

export class TestRoutingModule { }