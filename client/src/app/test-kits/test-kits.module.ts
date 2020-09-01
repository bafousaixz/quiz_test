import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng5SliderModule } from 'ng5-slider';
import { ComponentModule } from '../component/component.module';

import { ResourceService } from './_service/resource.service';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { ResourcesComponent } from './resources/resources.component';
import { FilterPipe } from './filter.pipe';
import { AnswersComponent } from './answers/answers.component';
import { ResourceComponent } from './resource/resource.component';
import { ListTestComponent } from './list-test/list-test.component';
import { CreateTestComponent } from './create-test/create-test.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    ResourcesComponent,
    FilterPipe,
    AnswersComponent,
    ResourceComponent,
    ListTestComponent,
    CreateTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    Ng5SliderModule,
    ComponentModule,
  ],
  providers:[
    ResourceService,
  ],
  exports: [
    FilterPipe,
  ]
})
export class TestKitsModule { }
