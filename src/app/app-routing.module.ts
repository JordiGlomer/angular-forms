import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form01Component } from './formularios/form01/form01.component';

const routes: Routes = [
  {path: 'forms/form01', component:Form01Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
