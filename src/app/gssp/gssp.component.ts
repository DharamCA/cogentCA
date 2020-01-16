import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse }    from '@angular/common/http';
import { EventEmitter } from 'events';
import { FormService } from '../_service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gssp',
  templateUrl: './gssp.component.html',
  styleUrls: ['./gssp.component.css']
})
export class GsspComponent implements OnInit {

  
title:"Ram";
posts: any;
data: any;

constructor(private products: FormService, private router: Router) { }

ngOnInit() {
  this.getdata();
}

login = new FormGroup({
  name : new FormControl('',Validators.required),
  email : new FormControl('', [
    Validators.required,
    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
  ]),
  mobile : new FormControl('', Validators.required),
  subject : new FormControl(''),
  message : new FormControl(''),
}
);

getdata(){
this.products.getdata().subscribe(
  res => {
    this.posts = res;
    console.log(this.posts);
  }
);
}

onSubmit(){
this.products.adddata(this.login.value)
.subscribe(data => {
  console.log(this.data);
  
})
alert("Data submitted successfuly");
  this.login.reset();
}

}
