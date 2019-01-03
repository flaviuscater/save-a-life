import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Notification} from '../../models/notification';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {

  notification: Notification = new Notification('', '');

  constructor(private notificationService: NotificationService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addNotification() {
    this.notificationService.addNotification(this.notification);
    this.openSnackBar('Notification added successfully', '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
