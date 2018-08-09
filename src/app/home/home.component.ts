import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private userService : UserService) {
    
   }

  ngOnInit() {



  }

  getName() {

    return this.userService.getUserName() ;

  }


 
  getEmail() {

    return this.userService.getUserEmail() ;

  }


  getPhoto() {

    return this.userService.getUserPhoto() ;

  }

  

}
