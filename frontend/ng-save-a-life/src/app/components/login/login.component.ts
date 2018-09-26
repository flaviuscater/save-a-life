import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginData = {username: "john", password: "123"};

  constructor(private _service: AuthService) {}

  login() {
    this._service.obtainAccessToken(this.loginData);
  }
}
