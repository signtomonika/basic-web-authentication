//SYSTEM MODULES

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";

// COMPONENT MODULES

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './auth/social/social.component';
import { SignupComponent } from './auth/signup/signup.component';

// ROUTES

import { AuthGuard } from './routes/auth-guard.service';
import { AppRoutingModule } from './routes/app-routing.module';

//SERVICES

import { AuthService } from './auth/auth.service';
import { SocialService } from './auth/social.service';
import { MicrosoftService } from './auth/microsoft.service';
import { MSuserService } from './shared/ms-user.service';
import { ImageService } from './shared/image.service';
import { MsUserDetailService } from './shared/ms-user-detail.service';
import { HttpService } from './auth/http.service';
import { UserService } from './shared/user.service';


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
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    SocialService,
    MicrosoftService,
    MSuserService,
    ImageService,
    MsUserDetailService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
