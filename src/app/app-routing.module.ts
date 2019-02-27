import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCartHomeComponent } from './app-cart-home/app-cart-home.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'homeservices',
    pathMatch: 'full'
  },
  {
    path: 'homeservices',
    component: AppCartHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 