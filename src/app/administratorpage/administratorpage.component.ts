import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../_service/form.service';
import { Router, Data } from '@angular/router';
import { Productitem } from '../productitem';
import { HttpClient } from '@angular/common/http';
import { Career } from '../career';
// import { User } from '../user';

@Component({
  selector: 'app-administratorpage',
  templateUrl: './administratorpage.component.html',
  styleUrls: ['./administratorpage.component.css']
})
export class AdministratorpageComponent implements OnInit {

  data: any;
  postdata: any;
  productitem: Productitem[];
  career: Career[];
  productid= "LLI"
  imagevalue:string = null
  imagename:string = "" 
  fd:any
  id: any;
  token: string;

  constructor( private product:FormService, private router: Router, private _http:HttpClient) { }

  ngOnInit() {
    this.getcareer();
  }

  careerform = new FormGroup({
    position : new FormControl('',Validators.required),
    location : new FormControl('', Validators.required),
    responce : new FormControl('', Validators.required),
    education : new FormControl('', Validators.required),
    message : new FormControl('', Validators.required),
  });

  getcareer(){
    this.product.getcareer().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      }
    );
  }

  addcareer(){
    this.product.addcareer(this.careerform.value)
    .subscribe(data => {
      console.log(this.data);
      
    })
    alert("Data submitted successfuly");
      this.careerform.reset();
      this.router.navigate(['administratorpage']);
  }

  deleteitem(post){
    this.product.deletePost(post.career_id)
    .subscribe( data => {
      let postI = this.data.indexOf(post.career_id);
      this.data.splice(postI, 1);
      this.router.navigate(['administratorpage']);
      console.log(this.data);
    })
  }

  // updateitem(career: Career){
  //   this.id = career.career_id;
  //   this.router.navigate(['editpost/' + this.id]);
  // }


  onLogout() {
    this.token = null;
    localStorage.removeItem('eq_user');
    localStorage.clear();
    this.router.navigate(['']);
   }
}
