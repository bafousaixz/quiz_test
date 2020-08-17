import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { resourceModel } from '../_model/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url = "http://localhost:3000/resource/"

  constructor(
    private http: HttpClient
  ) { }

  getReource(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  getReourceId(id: string): Observable<any>{
    return this.http.get<any>(this.url + id)
  }

  postResource(resource: resourceModel): Observable<any>{
    return this.http.post<any>(this.url, resource)
  } 

  putResource(resource: resourceModel): Observable<any>{
    return this.http.put<any>(`${this.url}${resource._id}`, resource)
  }

  deleteResource(id: string): Observable<any>{
    return this.http.delete<any>(this.url + id)
  }

}
