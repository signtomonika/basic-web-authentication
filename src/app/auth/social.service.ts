import { Injectable, NgZone } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { MicrosoftService } from './microsoft.service';


@Injectable()
export class SocialService {

  constructor(private authService: AuthService, private zone: NgZone) { }

  provider;

  error: string = '';



  setProvider(provider: string) {

    this.authService.setFirebaseUse();

    this.provider = null;

    // console.log(provider);

    switch (provider) {

      case 'google':

        this.provider = new firebase.auth.GoogleAuthProvider();

        break;

      case 'twitter':

        this.provider = new firebase.auth.TwitterAuthProvider();
        break;

      case 'facebook':

        this.provider = new firebase.auth.FacebookAuthProvider();
        break;

      case 'github':

        this.provider = new firebase.auth.GithubAuthProvider();
        break;



    }




    this.socialSignIn();



  }


  socialSignIn() {

    //console.log('Provider ', this.provider);

    firebase.auth().signInWithPopup(this.provider).
      then(
        (result) => {

          //console.log(result);

          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          //console.log('User ', user);

          firebase.auth().currentUser.getIdToken().then(

            (response) => {

              this.zone.run(

                () => {

                  this.authService.setAuthentication();
                }

              )

            }

          )


          // ...
        })
      .catch(
        (error) => {

          console.log('Error ', error);

          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...

          this.error = errorMessage;

          this.authService.setError(errorMessage);

        });



  }


}


