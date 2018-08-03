import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyC75sUhp7rb4IwAFZ3iwxfh5RxiMZWZYnc",
    authDomain: "projauthentication.firebaseapp.com",
    });

  }

}
