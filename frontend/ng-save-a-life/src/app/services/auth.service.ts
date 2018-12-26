import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Credentials} from '../Credentials';
import {Hospital} from '../hospital';
import {UserDetails} from '../UserDetails';
import {Authority} from '../Authority';

@Injectable()
export class AuthService {

  private userDetails: UserDetails;

  constructor(private _http: HttpClient, private _router: Router) {
  }

  obtainAccessToken(loginData: Credentials) {
    const credentials = loginData;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    console.log(credentials);
    this._http.post('http://localhost:8080/token/generate-token', credentials, {headers: headers})
      .subscribe(
        data => {
          this.saveToken(data);
        },
        err => alert('Invalid Credentials')
      );
  }

  saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.token, expireDate);
    console.log('Obtained Access token');
    this._router.navigate(['/']);
    // window.location.href = 'http://localhost:4200';
  }

  /*  getResource(resourceUrl): Observable<any> {
      const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Bearer ' + Cookie.get('access_token')});
      return this._http.get(resourceUrl, { headers: headers })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }*/

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
          this.userDetails = next;
      }
    );
  }

  getUserRoles(): Authority[] {
    return this.userDetails['authorities'];
  }

  getAuthorities(username: string): Observable<UserDetails> {
    const usersUrl = 'http://localhost:8080/users/' + username;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Cookie.get('access_token')})
    };

    return this._http.get<UserDetails>(usersUrl, httpOptions);
  }
}
