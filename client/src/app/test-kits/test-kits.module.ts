import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng5SliderModule } from 'ng5-slider';
import { ComponentModule } from '../component/component.module';
import { FormsModule } from '@angular/forms';
import { MiddleModule } from '../middle/middle.module';
import { ResourceRoutingModule } from './resource-routing.module'
import { FilterPipe } from './filter.pipe';
import { ResourceService } from './_services/resource.service';
import { QuestionsComponent } from './questions/questions.component';
import { ResourcesComponent } from './resources/resources.component';
import { AnswersComponent } from './answers/answers.component';
import { ResourceComponent } from './resource/resource.component';
import { ListTestComponent } from './list-test/list-test.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { ListResultComponent } from './list-result/list-result.component';



@NgModule({
  declarations: [
    QuestionsComponent,
    ResourcesComponent,
    AnswersComponent,
    ResourceComponent,
    ListTestComponent,
    CreateTestComponent,
    EditTestComponent,
    ListResultComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    Ng5SliderModule,
    ComponentModule,
    MiddleModule,
    ResourceRoutingModule,
  ],
  providers:[
    ResourceService,
  ],
  exports: [
    FilterPipe,
  ]
})
export class TestKitsModule { }
