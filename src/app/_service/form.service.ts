import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }    from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../contact';
import { Career } from '../career';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  career:Career[];
  contact: Contact[];
  errorData: {};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get<Contact[]>('http://cogentca.com/cogentca/list.php');
  }

  adddata(contact: Contact){
    return this.http.post('http://cogentca.com/cogentca/insert.php', contact);
  }



  chechusernameandpass(uname:string, pwd:string){
    if(uname == "admin" && pwd == "admin1234"){
      localStorage.setItem('username',"admin");
      return true;
    }
    else{
      return false;
    }
  }


// ************Add and fetch career record************

addcareer(career: Career){
  return this.http.post('http://localhost/cogentca/career.php', career);
}

getcareer(){
  return this.http.get<Career[]>('http://localhost/cogentca/listcareer.php');
}

deletePost(id:number){
  return this.http.delete('http://localhost/cogentca'+'/deletepost.php?id='+ id);
}


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
  
}
