import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable()

export class AuthService {

  errorMessage = '';

  userEmail: string;

  authenticated = false;

  constructor(private router: Router) {



  }

  signInUser(email: string, password: string) {

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


  setError(message: string){

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

    firebase.auth().signOut();

    this.authenticated = false;
    this.router.navigate(['/']);

  }

  deleteUser() {

    this.logOut();
    firebase.auth().currentUser.delete();

  }


}
