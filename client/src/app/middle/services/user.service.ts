import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/list/"

  constructor(
    private http: HttpClient
  ) { } 

 getAll(): Observable<any>{
   return this.http.get<any>(this.url)
 }

  }



  

