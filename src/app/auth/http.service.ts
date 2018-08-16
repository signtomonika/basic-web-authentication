import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import * as hello from 'hellojs/dist/hello.all.js';

import * as window from 'window' ;


@Injectable()
export class HttpService {
  getAccessToken() {
    const msft = hello('msft').getAuthResponse();
    const accessToken = msft.access_token;
    return accessToken;
  }
}
