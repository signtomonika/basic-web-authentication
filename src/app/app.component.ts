import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import * as firebaseui from 'firebaseui'
import { MicrosoftService } from './auth/microsoft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(private microsoft: MicrosoftService) { }

  ngOnInit() {

    // Initializing Auth Applications - Microsoft for Windows and Firebase for other Social Applications

    firebase.initializeApp({
      apiKey: "AIzaSyC75sUhp7rb4IwAFZ3iwxfh5RxiMZWZYnc",
      authDomain: "projauthentication.firebaseapp.com",
    });

    this.microsoft.initAuth();

  }

}
