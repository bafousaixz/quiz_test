import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';
import { ExamComponent } from './exam/exam.component';
import { MiddleModule } from '../middle/middle.module';
import { TestRoutingModule } from './test-routing.module';
import { ResultComponent } from './result/result.component';
import { ComponentModule } from '../component/component.module';
import { StartExamComponent } from './start-exam/start-exam.component';

@NgModule({
  declarations: [
    ExamComponent,
    StartExamComponent, 
    ResultComponent
  ],
  
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MiddleModule,
    ComponentModule,
    CountdownModule,
    TestRoutingModule,
  ]
})
export class TestsModule { }
