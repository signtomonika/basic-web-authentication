import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { map } from 'rxjs/operators';

import { DataRetrievalService } from '../shared/data-retrieval.service';

import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  getDataForm: FormGroup;

  dataReturned: any[];

  inputTypes = [
    'Email',
    'Rfid'
  ];

 errorMessage : string  ;



  constructor(private dataService: DataRetrievalService, private authService : AuthService) {


  }

  ngOnInit() {

    this.getDataForm = new FormGroup({
      'queryValue': new FormControl(this.authService.getUserEmail(), Validators.required),
      'ipType': new FormControl('Email')
    });

    this.errorMessage = '';

  }


  getdata() {

    const querySelected = this.getDataForm.controls.queryValue.value;

    const inputSelected = this.getDataForm.controls.ipType.value;


    let query;

    if (inputSelected == 'Rfid') {
      query = 'rfid/'.concat(querySelected);
    } else {
      query = querySelected;
    }


    this.dataService.getData(query)
      .subscribe(
        (data: any[]) => {
          this.dataReturned = data;

        },
        (error) => {

          this.errorMessage  = 'No Data Found for : ' + querySelected ;

        }
      )
      ;

      this.errorMessage = '';

  }


 


}
