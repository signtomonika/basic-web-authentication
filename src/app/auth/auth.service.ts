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

    this.isFirebaseUsed = true;
    this.isMicrosoftUsed = false;

  }

  setMSuse() {

    this.isFirebaseUsed = false;
    this.isMicrosoftUsed = true;

  }

  getFirebaseUse() {

    return this.isFirebaseUsed;
  }

  getMSuse() {

    return this.isMicrosoftUsed;

  }


  signInUser(email: string, password: string) {

    this.setFirebaseUse();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {

          this.setAuthentication();



          // console.log('User Logged in');

        }
      )
      .catch(
        error => {

          this.errorMessage = error.message;

          //console.log('error : ', error.message);

        }
      )


  }

  signUpUser(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {

          // console.log('User created');

          this.router.navigate(['/']);

        }
      )
      .catch(
        error => {

          this.setError(error.message);

          // console.log('error : ', error.message);

        }
      )


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


  }

  deleteUser() {

    this.logOut();
    if (this.isFirebaseUsed) {
      firebase.auth().currentUser.delete();
    }
  }


}
