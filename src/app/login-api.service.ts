import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
Login

@Injectable({
providedIn: 'root'
})

export class LoginApiService {
redirectUrl: string;
baseUrl:string = "http://localhost/cpcb_angular/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }

// public userlogin(username, password) {
// alert(username)
// return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
// .pipe(map(Users => {
// this.setToken(Users[0].name);
// this.getLoggedInName.emit(true);
// return Users;
// }));
// }

// public userregistration(name,email,pwd) {
// return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
// .pipe(map(Users => {
// return Users;
// }));
// }

public userlogin(username, password) {
  alert(username);
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(response => {
      console.log('Response:', response); // Log the response object
      if (response && response.length > 0 && response[0].email === username && response[0].password === password) {
        // Authentication successful
        this.setToken('token_value'); // Set a token (replace 'token_value' with an actual token)
        this.getLoggedInName.emit(true);
        return response;
      } else {
        // Authentication failed
        throw new Error('Invalid username or password');
      }
    }));
}


  

//token
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
if (usertoken != null) {
return true
}
return false;
}
}