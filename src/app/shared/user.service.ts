import { Injectable, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';
import { MSuserService } from './ms-user.service';
import { Subscription, observable, Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators'

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"


import { DomSanitizer } from "@angular/platform-browser";

import { ContentType } from '@angular/http/src/enums';
import { Promise } from 'es6-promise';
import { ImageService } from './image.service';
import { MsUserDetailService } from './ms-user-detail.service';

declare const Buffer;

@Injectable()
export class UserService {




  constructor(private authService: AuthService, private userDetailMs: MsUserDetailService) {

  }


  isMicrosoftUsed() {

    return this.authService.getMSuse();
  }

  getMicrosoftUser() {

    if (this.authService.getMSuse()) {

      this.userDetailMs.getMeMs();

    }

  }


  unsubMsUser() {

    this.userDetailMs.unsubMe();
  }


  getUserName() {

    if (this.authService.getFirebaseUse()) {

      return firebase.auth().currentUser.displayName;

    }
    else {


      return this.userDetailMs.getUserName();


    }



  }


  getUserEmail() {

    if (this.authService.getFirebaseUse()) {

      return firebase.auth().currentUser.email;

    }
    else {
      return this.userDetailMs.getEmail();
    }




  }

  getUserPhoto() {

    if (this.authService.getFirebaseUse()) {

      return firebase.auth().currentUser.photoURL;

    }
    else {

      return this.userDetailMs.getImageFromService();


    }

  }





}









