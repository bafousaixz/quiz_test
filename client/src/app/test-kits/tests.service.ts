import { Injectable } from '@angular/core';
import { resourceModel } from './resource.model'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestsService {
  url = "http://localhost:3000/resource/"
  constructor(
    private http: HttpClient
  ) { }

  getReource(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  postResource(resource: resourceModel): Observable<any>{
    return this.http.post<any>(this.url, resource)
  } 
}
