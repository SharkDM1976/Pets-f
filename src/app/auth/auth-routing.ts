import { Routes } from '@angular/router';
import {AuthBaseComponent} from "./auth-base.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";

export const AuthRoutes: Routes = [
  {
    path: 'auth',
    component: AuthBaseComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];
