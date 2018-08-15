import { Injectable } from '@angular/core';


// Microsoft Graph to handle User Information

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import * as MicrosoftGraphClient from "@microsoft/microsoft-graph-client"
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { HttpService } from '../auth/http.service';



@Injectable()
export class MSuserService {

  constructor(private httpService : HttpService) { }

 

  getClient(): MicrosoftGraphClient.Client
  {
    var client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
          done(null, this.httpService.getAccessToken()); //first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }

 
  getMe(): Observable<MicrosoftGraph.User>
  {
    var client = this.getClient();

    // console.log( 'Client ',client);

     return from(client
    .api('me')
    .select("displayName, userPrincipalName, id, mail")
    .get()
    .then ((res => {

      // console.log(res);
      return res;
    } ) )
    );
  }


getToken() {

  return this.httpService.getAccessToken();

}


}
