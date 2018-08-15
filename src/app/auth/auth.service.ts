import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import * as hello from 'hellojs/dist/hello.all.js';

@Injectable()

export class AuthService {

  errorMessage = '';

  userEmail: string;

  authenticated = false;

  isFirebaseUsed = false;

  isMicrosoftUsed = false;

  constructor(private router: Router) {



  }

  setFirebaseUse() {

    // console.log('setFirebaseUse');

    this.isFirebaseUsed = true;
    this.isMicrosoftUsed = false;

  }

  setMSuse() {

    //console.log('setMSuse');

    this.isFirebaseUsed = false;
    this.isMicrosoftUsed = true;

  }

  getFirebaseUse() {

    //console.log('FB Used? ', this.isFirebaseUsed)

    return this.isFirebaseUsed;
  }

  getMSuse() {

    //console.log('MS USed? ', this.isMicrosoftUsed) ;

    return this.isMicrosoftUsed;

  }


  signInUser(email: string, password: string) {

    this.setFirebaseUse();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {

          this.setAuthentication();

        }
      )
      .catch(
        error => {

          this.errorMessage = error.message;


        }
      )


  }

  signUpUser(email: string, password: string, name: string , photoUrl : string) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {


          this.setUserProfile(name, photoUrl);

        }
      )
      .catch(
        error => {

          this.setError(error.message);

        }
      )


  }

  setUserProfile(name: string , picUrl : string) {

    firebase.auth().currentUser
      .updateProfile(
        {
          displayName: name,
          photoURL: picUrl
        }

      ).then(
        () => {
          this.logOut();
        }
      ).catch(

        (error) => console.log(error)

      );


  }


  setError(message: string) {

    this.errorMessage = message;

  }


  getError() {

    return this.errorMessage;

  }



  isAuthenticated() {

    return this.authenticated;
  }

  setAuthentication() {

    this.authenticated = true;
    this.router.navigate(['/home']);

  }

  logOut() {


    if (this.isFirebaseUsed) {
      firebase.auth().signOut();

    } else {

      //Logout from Microsoft

      hello('msft').logout();

    }

    this.isFirebaseUsed = false;

    this.isMicrosoftUsed = false;

    this.authenticated = false;
    this.router.navigate(['/']);

    //console.log('LOGOUT');

  }

  deleteUser() {


    if (this.isFirebaseUsed) {
      firebase.auth().currentUser.delete();
    }

    this.logOut();
  }


}
