import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/users/me/"

  constructor(
    private http: HttpClient
  ) { }

  getUser():Observable<any> {
    const token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization":  token
      })
    };
    return this.http.get<any>(this.url, httpOptions)
  }

  editProfile(user: UserModel): Observable<any> {
    const token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization":  token
      })
    };
    return this.http.put<any>(this.url, user, httpOptions)
  }

}
