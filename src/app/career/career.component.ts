import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../_service/form.service';
import { Router, Data } from '@angular/router';
import { Productitem } from '../productitem';
import { HttpClient } from '@angular/common/http';
//import { User } from '../user';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  data: any;

  constructor( private product:FormService, private router: Router, private _http:HttpClient) { }

  careerforms = new FormGroup({
    position : new FormControl('', Validators.required),
    name : new FormControl('', Validators.required),
    email : new FormControl('', [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    ]),
    phone : new FormControl('', Validators.required),
    resume : new FormControl('', Validators.required),
  });


  ngOnInit() {
    this.getcareer();
  }

  getcareer(){
    this.product.getcareer().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      }
    );
  }

}
