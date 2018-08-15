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

declare const Buffer;

@Injectable()
export class UserService {


  me: microsoftgraph.User;  //Profile Information
  subsGetMe: Subscription;
  userPhoto: microsoftgraph.User;  //Photo Information
  subsGetPhoto: Subscription;

  private user;


  imageToShow: any;
  isImageLoading = false;

   private graphUri = "https://graph.microsoft.com/v1.0/me/photo/$value";



  constructor(private authService: AuthService, private msUserService: MSuserService,
      private imageService : ImageService
  ) {


    if (this.authService.getMSuse()) {

      // console.log(this.authService.getFirebaseUse());

      this.subsGetMe = this.msUserService.getMe().subscribe(me => this.me = me);
    }




  }

  isMicrosoftUsed() {

    return this.authService.getMSuse();

  }


  getUserName() {

    if (this.authService.getFirebaseUse()) {

      return firebase.auth().currentUser.displayName;

    }
    else {


      return this.me.displayName;



    }



  }


  getUserEmail() {

    if (this.authService.getFirebaseUse()) {

      return firebase.auth().currentUser.email;

    }
    else {
      return this.me.userPrincipalName;
    }




  }

  getUserPhoto() {

    if (this.authService.getFirebaseUse()) {

      return firebase.auth().currentUser.photoURL;

    }
    else {

     return this.getImageFromService();

     
    }

  }

 
// Microsoft graph API returns a blob data which is converted into image

  createImageFromBlob(image: Blob) {
     let reader = new FileReader();
     reader.addEventListener("load", () => {

      //console.log(reader.result);
        this.imageToShow = reader.result;
     }, false);
  
     if (image) {
        reader.readAsDataURL(image);
     }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.imageService.getImage(this.graphUri).subscribe(data => {
      //console.log(data);
      this.createImageFromBlob(data);
      this.isImageLoading = false;
      
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });

    return this.imageToShow ;
}
 


}









