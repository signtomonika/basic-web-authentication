import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JsonpModule  } from '@angular/http';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';

import { HttpClient, HttpClientModule} from "@angular/common/http";

import { DataRetrievalService } from './shared/data-retrieval.service';
import { AuthGuard } from './auth-guard.service';


//import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-login-app'}),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [AuthService, DataRetrievalService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
