import { NgModule } from '@angular/core';

import {  Routes, RouterModule } from '@angular/router' ;
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from './auth-guard.service';


const appRoutes : Routes =[

  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home' //, canActivate:[AuthGuard] 
   , component: HomeComponent}


]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
