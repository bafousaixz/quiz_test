import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
