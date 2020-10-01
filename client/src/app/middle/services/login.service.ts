import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  url = "http://localhost:3000/users/"
  _url = "http://localhost:3000/users/login/"

  constructor(
    private http: HttpClient
  ) { } 

  signIn(user: LoginModel): Observable<any> {
    return this.http.post<any>(this._url, user)
  }

  signUp(user : UserModel): Observable<any> {
    return this.http.post<any>(this.url, user)
  }
  
}
