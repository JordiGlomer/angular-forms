import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form01Component } from './form01/form01.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { Forms02Component } from './forms02/forms02.component';



@NgModule({
  declarations: [
    Form01Component,
    Forms02Component,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class FormulariosModule { }
