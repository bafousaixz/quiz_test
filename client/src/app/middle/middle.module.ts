import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { TestService } from './services/test.service';
import { LoginService } from './services/login.service';
import { AnswerService } from './services/answer.service';
import { TestResultService } from './services/test-result.service';
import { TestQuestionService } from './services/test-question.service';

@NgModule({
  declarations: [
    UppercasePipe,
  ],
  imports: [
    CommonModule
  ],
  providers:[
    TestService,
    LoginService,
    AnswerService,
    TestResultService,
    TestQuestionService,
  ],
  exports:[
    UppercasePipe,
  ]
})
export class MiddleModule { }
