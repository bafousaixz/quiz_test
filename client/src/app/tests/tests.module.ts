import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam/exam.component';
import { ComponentModule } from '../component/component.module';
import { TestKitsModule } from '../test-kits/test-kits.module';
import { StartExamComponent } from './start-exam/start-exam.component'
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [ExamComponent, StartExamComponent],
  imports: [
    CommonModule,
    ComponentModule,
    TestKitsModule,
    CountdownModule
  ]
})
export class TestsModule { }
