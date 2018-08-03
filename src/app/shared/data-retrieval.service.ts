import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { Response } from '@angular/http';

@Injectable()

export class DataRetrievalService {

  

  constructor(private http: HttpClient) { }

  getData(query: string) {

  return  this.http.get<any>('https://check-api-212117.appspot.com/'+query
    )
    
  .pipe(
    map(
      (response) =>{

const data = response;

console.log(data);

return data;
      }
    )
  )
  

  }



}
