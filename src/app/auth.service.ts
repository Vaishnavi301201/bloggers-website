import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:4200/login';
  private isLoggedIn = false;

  constructor(
    private http: HttpClient
  ) { }

  login(credentials:any):Observable<any>{
    return this.http.post(this.loginUrl,credentials,{observe:'response'}).pipe(
      tap(response=>{
        if (response.status==200){
          this.isLoggedIn= true;
        }
      })
    )
  }


}
