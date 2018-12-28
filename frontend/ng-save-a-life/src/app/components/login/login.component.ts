import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Credentials} from '../../models/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string;
  public password: string;

  constructor(private _service: AuthService) {}

  login() {
    this._service.obtainAccessToken(new Credentials(this.username, this.password));
  }
}
