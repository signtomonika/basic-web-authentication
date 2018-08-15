import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';


import { HttpClient, HttpClientModule } from "@angular/common/http";


import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { SocialComponent } from './auth/social/social.component';
import { SocialService } from './auth/social.service';
import { MicrosoftService } from './auth/microsoft.service';
import { MSuserService } from './shared/ms-user.service';
import { ImageService } from './shared/image.service';




//import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SocialComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-login-app' }),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [AuthService, AuthGuard, UserService, SocialService, MicrosoftService, MSuserService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
