import { FilterPipe } from './filter.pipe';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MiddleModule } from '../middle/middle.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '../component/component.module';
import { ResourceRoutingModule } from './resource-routing.module';
import { AnswersComponent } from './answers/answers.component';
import { ResourceComponent } from './resource/resource.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { ListTestComponent } from './list-test/list-test.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResourcesComponent } from './resources/resources.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ListResultComponent } from './list-result/list-result.component';

@NgModule({
  declarations: [
    FilterPipe,
    AnswersComponent,
    ResourceComponent,
    ListTestComponent,
    EditTestComponent,
    QuestionsComponent,
    ResourcesComponent,
    CreateTestComponent,
    ListResultComponent,
  ],
  imports: [
    FormsModule,
    MiddleModule,
    CommonModule,
    RouterModule,
    Ng5SliderModule,
    ComponentModule,
    HttpClientModule,
    NgxPaginationModule,
    ResourceRoutingModule,
  ],
  providers:[],
  exports: [FilterPipe]
})
export class TestKitsModule { }
