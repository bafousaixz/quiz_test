import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ResourceService } from './_service/resource.service'
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { ResourcesComponent } from './resources/resources.component';
import { FilterPipe } from './filter.pipe';
import { AnswersComponent } from './answers/answers.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    ResourcesComponent,
    FilterPipe,
    AnswersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers:[
    ResourceService,
  ]
})
export class TestKitsModule { }
