import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Cookie} from 'ng2-cookies';
import {Hospital} from '../models/hospital';
import {throwError} from 'rxjs';
import {Notification} from '../models/notification';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookie.get('access_token')})
};

@Injectable()
export class NotificationService {

  private notificationsUrl = 'https://sleepy-fjord-97142.herokuapp.com/notifications';

  constructor(private httpClient: HttpClient) { }

  getNotifications () {
    return this.httpClient.get<Notification[]>(this.notificationsUrl, httpOptions);
  }

  addNotification (notification: Notification) {
    return this.httpClient.post<Notification>(this.notificationsUrl, notification, httpOptions)
      .subscribe(
        h => console.log(h),
        error1 => this.handleError(error1)
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
  }
}
