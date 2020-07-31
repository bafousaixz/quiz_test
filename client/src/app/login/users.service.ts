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
  uri = "http://localhost:3000/users/login/"
  get = "http://localhost:3000/users/me/"

  constructor(
    private http: HttpClient
  ) { } 

  signin(user: Signin): Observable<User>{
    return this.http.post<User>(this.uri, user)
  }

  signup(user : User): Observable<User>{
    return this.http.post<User>(this.url, user)
  }

  getUser():Observable<any>{
    const token = localStorage.getItem("token")
    const httpOptions = {
     headers: new HttpHeaders({
        "Authorization":  token
     })
   };
    console.log(token)
    return this.http.get<any>(this.get, httpOptions)
  }



  
}
