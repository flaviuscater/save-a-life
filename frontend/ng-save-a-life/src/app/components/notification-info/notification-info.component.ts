import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-notification-info',
  templateUrl: './notification-info.component.html',
  styleUrls: ['./notification-info.component.css']
})
export class NotificationInfoComponent implements OnInit {

  @Input()
  hospitalName: string;
  @Input()
  description: string;
  @Input()
  bloodDonationAmountNeeded: number;
  @Input()
  private completed: boolean;

  bloodDonated: number;

  imgPath: String;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.imgPath = '../../assets/images/notification-image.jpg';
  }

  donateBlood() {
    if (this.bloodDonated != null && this.bloodDonated > 0) {
      this.bloodDonationAmountNeeded -= this.bloodDonated;
      this.openSnackBar('Donated: ' + this.bloodDonated, '');
    }

    // set flag for user donation once a day
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
