import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MSuserService } from './ms-user.service';


@Injectable()
export class ImageService {



  constructor(private httpClient: HttpClient , private msUserService : MSuserService ) { }

   getImage(imageUrl: string): Observable<Blob> {

    //  console.log('response defined before get ', this.httpClient.get<Blob>(imageUrl)) ;

    //  console.log( 'response type inside get ' ,this.httpClient.get(imageUrl, {responseType : 'blob' })) ;

     return this.httpClient.get(imageUrl, {
       
      headers: new HttpHeaders().set('Authorization', 'Bearer '+ this.msUserService.getToken()),
      
      responseType : 'blob'
    
    }
   )

  }




}