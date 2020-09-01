import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam/exam.component';
import { ComponentModule } from '../component/component.module';
import { TestKitsModule } from '../test-kits/test-kits.module'

@NgModule({
  declarations: [ExamComponent],
  imports: [
    CommonModule,
    ComponentModule,
    TestKitsModule
  ]
})
export class TestsModule { }
