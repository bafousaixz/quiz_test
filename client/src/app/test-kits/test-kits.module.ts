import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitsComponent } from './kits/kits.component';
import { TestsService } from './tests.service'


@NgModule({
  declarations: [
    KitsComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    TestsService,
  ]
})
export class TestKitsModule { }
