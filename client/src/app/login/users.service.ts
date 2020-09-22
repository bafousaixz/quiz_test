import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from './user.model.js';
import { Signin } from './signin.model'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:3000/users/"
  _url = "http://localhost:3000/users/login/"
  get = "http://localhost:3000/users/me/"

  constructor(
    private http: HttpClient
  ) { } 

  signIn(user: Signin): Observable<User>{
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



  

