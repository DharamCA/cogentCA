import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }    from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  contact: Contact[];
  errorData: {};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get<Contact[]>('http://localhost/cogentca/list.php');
  }

  adddata(contact: Contact){
    return this.http.post('http://localhost/cogentca/insert.php', contact);
  }
  
}
