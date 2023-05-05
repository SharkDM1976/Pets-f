import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BaseComponent} from "./base/base.component";
import {PageNotFoundComponent} from "./base/page-not-found/page-not-found.component";

import {AuthRoutes} from "./auth/auth-routing";
import {PetsRoutes} from "./pets-base/pet-routing";
import {MailRoutes} from "./mail-base/mail.routing";

const routes: Routes = [
  { path: '',
    component: BaseComponent,
    children: [
      { path: '', redirectTo: '/pets', pathMatch: 'full'},
      ...AuthRoutes,
      ...PetsRoutes,
      ...MailRoutes,
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
