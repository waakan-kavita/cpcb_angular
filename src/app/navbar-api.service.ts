import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavbarApiService {
  private baseUrl = 'http://localhost/cpcb_angular/php'; 

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.baseUrl}/userDetails.php`, body);
  }
  // redirectUrl: string;
  // baseUrl:string = "http://localhost/cpcb_angular/php";

  // // Define an EventEmitter to emit the fetched data
  // getLoggedInName: EventEmitter<any> = new EventEmitter<any>();

  // constructor(private httpClient : HttpClient) { }

  // fetchData(): Observable<any> {
  //   const url = `${this.baseUrl}/login.php`;
  //   return this.httpClient.get<any>(url).pipe(
  //     map(response => {
  //       console.log(response)
  //       if (!response || Object.keys(response).length === 0) {
  //         throw new Error('No data available');
  //       }
  //       this.getLoggedInName.emit(response.data); // Emit the data here
  //       return response;
  //     }),
  //     catchError(error => {
  //       console.error('Error fetching data:', error);
  //       return throwError(error);
  //     })
  //   );
  // }
}
