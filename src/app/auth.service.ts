import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/login';
  private isLoggedIn = false;

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.loginUrl, credentials, { observe: 'response' });
  }


}
