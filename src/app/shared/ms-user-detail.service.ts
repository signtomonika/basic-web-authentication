import { Injectable } from '@angular/core';
import { MSuserService } from './ms-user.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { ImageService } from './image.service';

@Injectable()
export class MsUserDetailService {

  
  me: microsoftgraph.User;  //Profile Information
  subsGetMe: Subscription;
  userPhoto: microsoftgraph.User;  //Photo Information
  subsGetPhoto: Subscription;

  private user;


  imageToShow: any;
  isImageLoading = false;

   private graphUri = "https://graph.microsoft.com/v1.0/me/photo/$value";


  constructor(private msUserService: MSuserService , private imageService : ImageService) { }

 
  getMeMs(){

   
      this.subsGetMe = this.msUserService.getMe().subscribe(me => this.me = me);
    }


  

  unsubMe() {

    this.subsGetMe.unsubscribe();

  }

  getEmail(){

    return this.me.userPrincipalName;

  }

  getUserName() {

    return this.me.displayName;
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
