import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  redirectUrl: string;
  username: string;
  baseUrl: string = "http://localhost/cpcb_angular/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    // Retrieve username from localStorage on service initialization
    this.username = localStorage.getItem('username') || '';
  }

  private usernameSource = new Subject<string>();
  username$ = this.usernameSource.asObservable();

  async setUsername(username: string) {
    this.username = username;
    // Store username in localStorage
    localStorage.setItem('username', username);
    this.usernameSource.next(username);
    return username;
  }

  getUsername(): string {
    return this.username;
  }

  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(response => {
        if (!response.valid_username && response.valid_password) {
          throw new Error(response.error);
        } else if (response.valid_username && !response.valid_password) {
          throw new Error('Invalid password');
        } else if (!response.valid_username && !response.valid_password) {
          throw new Error(response.error);
        } else {
          this.setToken('token_value');
          this.getLoggedInName.emit(response.data);
          this.setUsername(response.data.username);
          return response;
        }
      }));
  }

  // token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    return usertoken !== null;
  }
}
