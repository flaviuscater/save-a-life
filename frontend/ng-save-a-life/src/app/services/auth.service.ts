import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

export class Foo {
  constructor(
    public id: number,
    public name: string) {}
}

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  obtainAccessToken(loginData) {
    const params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'fooClientIdPassword');

    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('fooClientIdPassword:secret')});
    console.log(params.toString());
    this._http.post('http://localhost:8081/spring-security-oauth-server/oauth/token', params.toString(), { headers: headers })
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials')
      );
  }

  saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token');
    this._router.navigate(['/']);
    // window.location.href = 'http://localhost:4200';
  }

  getResource(resourceUrl): Observable<any> {
    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + Cookie.get('access_token')});
    return this._http.get(resourceUrl, { headers: headers })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  checkCredentials() {
    if (!Cookie.check('access_token')) {
      this._router.navigate(['/login']);
    }
  }

  logout() {
    Cookie.delete('access_token');
    this._router.navigate(['/login']);
  }
}
