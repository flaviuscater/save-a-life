import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Credentials} from '../models/Credentials';
import {UserDetails} from '../models/UserDetails';
import {Authority} from '../models/Authority';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) {
  }

  obtainAccessToken(loginData: Credentials) {
    const credentials = loginData;
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    localStorage.setItem('loggedUser', JSON.stringify(loginData.getUsername()));

    this._http.post('http://localhost:8080/token/generate-token', credentials, {headers: headers})
      .subscribe(
        data => {
          this.saveToken(data);
          this._router.navigate(['/']);
        },
        err => alert('Invalid Credentials')
      );
  }

  saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.token, expireDate);
    console.log('Obtained Access token');
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

  fetchUserRoles(username: string) {
    this.getAuthorities(username).subscribe(
      (next: UserDetails) => {
          localStorage.setItem('userDetails', JSON.stringify(next));
          console.log('set user roles to: ' + next);
      }
    );
  }

  getUserRoles(): Authority[] {
    return JSON.parse(localStorage.getItem('userDetails'))['authorities'];
  }

  getAuthorities(username: string): Observable<UserDetails> {
    const usersUrl = 'http://localhost:8080/users/' + username;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookie.get('access_token')})
    };

    return this._http.get<UserDetails>(usersUrl, httpOptions);
  }
}
