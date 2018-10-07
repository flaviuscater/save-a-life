import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {HospitalService} from '../../services/hospital.service';
import {Hospital} from '../../hospital';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hospital: Hospital = new Hospital('', '', '', '', '', '');
  constructor(private _service: AuthService, private hospitalService: HospitalService) {}

  ngOnInit() {
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
  addHospital() {
    this.hospitalService.addHospital(this.hospital);
  }
}
