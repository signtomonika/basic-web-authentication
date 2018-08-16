import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';

import * as hello from 'hellojs/dist/hello.all.js'
import { MicrosoftService } from '../microsoft.service';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
 
})
export class SocialComponent implements OnInit {

  state = 'final';

  start = false;

  constructor(private socialService: SocialService, private microsoft: MicrosoftService) { }

  ngOnInit() {



  }

  socialSign(provider: string) {



    this.socialService.setProvider(provider);



  }

  windowsSign() {

    //console.log('Microsoft Logged In');

    this.microsoft.login();

  }

 

}
