import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../_service/form.service';
import { Router, Data } from '@angular/router';
import { Productitem } from '../productitem';
import { HttpClient } from '@angular/common/http';
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
  productid= "LLI"
  imagevalue:string = null
  imagename:string = "" 
  fd:any
  id: any;

  constructor( private product:FormService, private router: Router, private _http:HttpClient) { }

  ngOnInit() {
    //this.getproductdata()
  }

  productform = new FormGroup({
    name : new FormControl('',Validators.required),
    model : new FormControl('', Validators.required),
    mrp : new FormControl('', Validators.required),
    lighttype : new FormControl('', Validators.required),
    voltage : new FormControl('', Validators.required),
    wattage : new FormControl('', Validators.required),
    basesize : new FormControl('', Validators.required),
    efficacy : new FormControl('', Validators.required),
    cri : new FormControl('', Validators.required),
    pf : new FormControl('', Validators.required),
    angle : new FormControl('', Validators.required),
    material : new FormControl('', Validators.required),
    scolors : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required)
  });

  // getproductdata(){
  //   this.product.getproductdata().subscribe(
  //     res => {
  //       this.data = res;
  //       console.log(this.data);
  //     }
  //   );
  // }
  
  // addproduct(){
  //   this.product.addproduct(this.productform.value)
  //   .subscribe(data => {
  //     console.log(this.data);
      
  //   })
  //   alert("Data submitted successfuly");
  //     this.productform.reset();
  //     this.router.navigate(['administratorpage']);
  // }

  // deleteitem(post){
  //   this.product.deletePost(post.product_id)
  //   .subscribe( data => {
  //     let postI = this.data.indexOf(post.product_id);
  //     this.data.splice(postI, 1);
  //     this.router.navigate(['administratorpage']);
  //     console.log(this.data);
  //   })
  // }

  // updateitem(productitem: Productitem){
  //   this.id = productitem.product_id;
  //   this.router.navigate(['editpost/' + this.id]);
  // }

  // fileupload(event){
  //   this.imagevalue = event.target.files[0].name;
  //   console.log(event);
  // }

}
