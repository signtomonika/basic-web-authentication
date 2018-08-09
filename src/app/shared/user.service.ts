import { Injectable, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class UserService  {



  private user;

 
  constructor(private authService: AuthService) { 
    
  }

  getUserName() {

    return firebase.auth().currentUser.displayName;

  }

  getUserEmail() {

    return  firebase.auth().currentUser.email;

  }

  getUserPhoto() {

    return firebase.auth().currentUser.photoURL;

  }

 

  




}
