import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { TestsService } from './tests.service'
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  providers:[
    TestsService,
  ]
})
export class TestKitsModule { }
