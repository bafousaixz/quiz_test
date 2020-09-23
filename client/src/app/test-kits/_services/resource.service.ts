import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ResourceModel } from '../_models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url = "http://localhost:3000/resources/"
  constructor(
    private http: HttpClient
  ) { }

  getReource(user_id: string): Observable<any>{
    return this.http.get<any>(this.url + user_id)
  }

  getReourceId(id: string, user_id: string): Observable<any>{
    return this.http.get<any>(this.url + id + '/' + user_id)
  }

  getListResource(id: string): Observable<any>{
    return this.http.get<any>(this.url + id)
  }

  postResource(resource: ResourceModel): Observable<any>{
    return this.http.post<any>(this.url, resource)
  } 

  putResource(resource: ResourceModel): Observable<any>{
    return this.http.put<any>(`${this.url}${resource._id}`, resource)
  }

  deleteResource(id: string): Observable<any>{
    return this.http.delete<any>(this.url + id)
  }

}
