import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form01Component } from './form01/form01.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    Form01Component,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ]
})
export class FormulariosModule { }
