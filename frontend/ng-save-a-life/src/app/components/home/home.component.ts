import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Notification} from '../../models/notification';
import {NotificationService} from '../../services/notification.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notifications: Notification[];

  constructor(private _service: AuthService,
              private notificationService: NotificationService,
              private elementRef: ElementRef,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this._service.checkCredentials();
    if (JSON.parse(localStorage.getItem('userDetails')) == null) {
      this._service.fetchUserRoles(JSON.parse(localStorage.getItem('loggedUser')));
    }
    this.initializeNotifications();
  }

  logout() {
    this._service.logout();
  }

  private initializeNotifications() {
    this.notificationService.getNotifications()
      .subscribe(notifications => {
          this.notifications = notifications;
        },
        error1 => console.log(error1)
      );
  }

  /*  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'grey';
    }*/


}
