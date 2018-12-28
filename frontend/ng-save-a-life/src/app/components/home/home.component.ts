import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: AuthService) {}

  ngOnInit() {
    this._service.checkCredentials();
    if (JSON.parse(localStorage.getItem('userDetails')) == null) {
      this._service.fetchUserRoles( JSON.parse(localStorage.getItem('loggedUser')));
    }
  }

  logout() {
    this._service.logout();
  }
}
