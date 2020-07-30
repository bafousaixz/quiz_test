import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from './user.model.js';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:3000/users/"

  constructor(
    private http: HttpClient
  ) { }


  signup(user : User): Observable<User[]>{
    return this.http.post<User[]>(this.url, user)
  }

  
}
