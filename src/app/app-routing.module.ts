import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {SignPComponent} from './sign-p/sign-p.component';
import {LoginComponent} from './login/login.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  {path: 'signUp', component: SignPComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
