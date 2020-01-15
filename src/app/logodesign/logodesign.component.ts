import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse }    from '@angular/common/http';
import { EventEmitter } from 'events';
import { FormService } from '../_service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logodesign',
  templateUrl: './logodesign.component.html',
  styleUrls: ['./logodesign.component.css']
})
export class LogodesignComponent implements OnInit {

  title:"Ram";
  posts: any;
  data: any;
  subject1 = "Arrange a call about 'business plan project report'";
  message1 = "I am Still confused about 'business plan project report', please arrange a call for the same.";
  subject2 = "Still confused about 'business plan project report'";
  message2 = "Still confused about 'business plan project report', please provide Free Advisor Consultation.";
  subject3 = "Complete List of Document required";
  message3 = "Please share the list of required document for the same.";
  subject4 = "Not Founs Ansrwe our Question";
  message4 = "Not Founs Ansrwe our Question. Please arrange a call for the same.";

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

 logins = new FormGroup({
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

loginss = new FormGroup({
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

loginsss = new FormGroup({
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

onSubmit1(){
  this.products.adddata(this.logins.value)
  .subscribe(data => {
    console.log(this.data);
    
  })
  alert("Data submitted successfuly");
    this.logins.reset();
}

onSubmit2(){
  this.products.adddata(this.loginss.value)
  .subscribe(data => {
    console.log(this.data);
    
  })
  alert("Data submitted successfuly");
    this.loginss.reset();
}

onSubmit3(){
  this.products.adddata(this.loginsss.value)
  .subscribe(data => {
    console.log(this.data);
    
  })
  alert("Data submitted successfuly");
    this.loginsss.reset();
}

}
