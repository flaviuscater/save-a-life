import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Hospital} from '../models/hospital';
import {catchError} from 'rxjs/internal/operators';
import { Cookie } from 'ng2-cookies';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookie.get('access_token')})
};

@Injectable()
export class HospitalService {

  private hospitalsUrl = 'http://localhost:8080/hospitals';
   /*headers = new HttpHeaders({
  'Authorization': 'Bearer ' + Cookie.get('access_token')});*/

  constructor( private httpClient: HttpClient) {
  }

  getHospitals () {
    return this.httpClient.get<Hospital[]>(this.hospitalsUrl, httpOptions);
  }

  addHospital (hospital: Hospital) {
    return this.httpClient.post<Hospital>(this.hospitalsUrl, hospital, httpOptions)
      .subscribe(
        h => console.log(h)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
