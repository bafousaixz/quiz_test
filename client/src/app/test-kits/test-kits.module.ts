import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitsComponent } from './kits/kits.component';
import { TestsService } from './tests.service'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KitsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    TestsService,
  ]
})
export class TestKitsModule { }
