import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ComponentModule } from '../component/component.module';
import { TestKitsModule } from '../test-kits/test-kits.module';
import { MiddleModule } from '../middle/middle.module'
import { StartExamComponent } from './start-exam/start-exam.component'
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [ExamComponent, StartExamComponent, ResultComponent],
  imports: [
    CommonModule,
    ComponentModule,
    TestKitsModule,
    CountdownModule,
    RouterModule,
    FormsModule,
    MiddleModule,
  ]
})
export class TestsModule { }
