import { Injectable ,NgZone } from '@angular/core';

import { Router } from '@angular/router';

import * as hello from 'hellojs/dist/hello.all.js';

import { config } from '../shared/app.config';
import { AuthService } from './auth.service';


// HANDLES LOGIN 

@Injectable()
export class MicrosoftService {

  constructor(private zone: NgZone , private router : Router, private authService: AuthService) { }



  //Initializing Microsoft Developer App to use for Authentication

  initAuth() {
    hello.init({
        msft: {
          id: config.appId,
          oauth: {
            version: 2,
            auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: window.location.href }
    );

    // console.log('Microsoft Initialized')
  }

//Login

  login() {
    
    // console.log('Before Login');

    this.authService.setMSuse();

    hello('msft').login({ scope: config.scope }).then(
      () => {
        
        this.zone.run(() => {
          
          this.authService.setAuthentication();
          
        });
      },
      e => console.error(e.error.message)
    );

    
  }

 //LogOut from Microsoft Handled in AuthService


 //Access Token

 getAccessToken() {
  const msftReponse = hello('msft').getAuthResponse();
  const accessToken = msftReponse.access_token;
  return accessToken;
}

}
