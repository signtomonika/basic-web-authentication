import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  email : string;

  password: string;

  name : string;

  photoUrl : string;

  error : string;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.error = ''

  }

  onSubmit(form: NgForm){

    this.email = form.value.email;
  
    this.password = form.value.password;
  
    this.name = form.value.name;

    this.photoUrl = form.value.photo;

    // console.log('email', this.email );
    // console.log('password', this.password );
  
  this.authService.signUpUser(this.email, this.password, this.name , this.photoUrl);
  
  setTimeout(() => {
    this.error = this.authService.getError();
  }, 500);
  
  }
  

}
