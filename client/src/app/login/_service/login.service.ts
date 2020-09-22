import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from '../_model/user.model';
import { Login } from '../_model/login.model'
import { Observable, of } from 'rxjs';


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

  signIn(user: Login): Observable<User>{
    return this.http.post<User>(this._url, user)
  }

  signUp(user : User): Observable<User>{
    return this.http.post<User>(this.url, user)
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

  editProfile(user: User): Observable<User>{
    const token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization":  token
      })
    };
    return this.http.put<User>(this.get, user, httpOptions)
  }
}
