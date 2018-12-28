import { Component, OnInit } from '@angular/core';
import {Hospital} from '../../models/hospital';
import {HospitalService} from '../../services/hospital.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-hospital-input-form',
  templateUrl: './hospital-input-form.component.html',
  styleUrls: ['./hospital-input-form.component.css']
})
export class HospitalInputFormComponent implements OnInit {

  hospital: Hospital = new Hospital('', '', '', '', '', '');

  constructor(private hospitalService: HospitalService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addHospital() {
    this.hospitalService.addHospital(this.hospital);
    this.openSnackBar('Hospital added successfully', '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
