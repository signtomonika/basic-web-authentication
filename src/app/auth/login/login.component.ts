import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email : string;

  password: string;

  error : string;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.errorMessage = '';

  }

onSubmit(form: NgForm){

  this.email = form.value.email;

  this.password = form.value.password;

  //  console.log('email', this.email );
  // console.log('password', this.password );

this.authService.signInUser(this.email, this.password);

setTimeout(() => {
  this.error = this.authService.getError();
}, 500);

}

}
