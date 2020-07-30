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
  uri = "http://localhost:3000/users/login"

  constructor(
    private http: HttpClient
  ) { } 

  signin(user: Signin): Observable<User>{
    return this.http.post<User>(this.uri, user)
  }

  signup(user : User): Observable<User>{
    return this.http.post<User>(this.url, user)
  }



  
}
