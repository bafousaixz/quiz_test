import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/users/"
  _url = "http://localhost:3000/users/login/"
  get = "http://localhost:3000/users/me/"

  constructor(
    private http: HttpClient
  ) { } 

  signIn(user: Login): Observable<any>{
    return this.http.post<any>(this._url, user)
  }

  signUp(user : UserModel): Observable<any>{
    return this.http.post<any>(this.url, user)
  }

  getUser():Observable<any>{
    const token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization":  token
      })
    };
    return this.http.get<any>(this.get, httpOptions)
  }

  editProfile(user: UserModel): Observable<any>{
    const token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization":  token
      })
    };
    return this.http.put<any>(this.get, user, httpOptions)
  }
}
