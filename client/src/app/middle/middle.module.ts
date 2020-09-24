import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { PreloadComponent } from './preload/preload.component';



@NgModule({
  declarations: [
    UppercasePipe,
    PreloadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UppercasePipe,
    PreloadComponent
  ]
})
export class MiddleModule { }
