import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';



@NgModule({
  declarations: [UppercasePipe],
  imports: [
    CommonModule
  ],
  exports:[
    UppercasePipe
  ]
})
export class MiddleModule { }
