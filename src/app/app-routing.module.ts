import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form01Component } from './formularios/form01/form01.component';
import { Forms02Component } from './formularios/forms02/forms02.component';

const routes: Routes = [
  {path: 'forms/form01', component:Form01Component},
  {path: 'forms/form02', component:Forms02Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
