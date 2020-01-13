import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../_service/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:any;
  
  constructor( private router: Router, private loginservice: FormService) { }

  ngOnInit() {
  }

  loginpage = new FormGroup({
    name : new FormControl('',Validators.required),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
  }
 );

  redirectto(){
    this.router.navigateByUrl('resetpage');
  }

  usercheck(uname: string, p: string){
    var output = this.loginservice.chechusernameandpass(uname, p);
    if(output == true){
        this.router.navigate(['/administratorpage']);
    }
    else{
      this.msg = "Invalid username and password";
    }
    
  }

  logoutuser(){
    
  }
}
