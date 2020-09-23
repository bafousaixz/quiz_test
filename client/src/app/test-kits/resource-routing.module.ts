import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTestComponent } from './edit-test/edit-test.component';
import { ListResultComponent } from './list-result/list-result.component';
import { ListTestComponent } from './list-test/list-test.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResourceComponent } from './resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';

const resourceRoutes: Routes = [ 
    {
        path: '',
        component: ResourcesComponent,
        children: [
            {
                path: ':id',
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
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(resourceRoutes)],
    exports: [RouterModule]
  })

export class ResourceRoutingModule { }