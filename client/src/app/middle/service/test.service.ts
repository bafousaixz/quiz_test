import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/delay'

import { testModel } from '../model/test.model';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  url="http://localhost:3000/tests/";
  _url="http://localhost:3000/tests_ad/";

  constructor(
    private http: HttpClient,
  ) { }

  getTest(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  getDetail(id: string): Observable<any>{
    return this.http.get<any>(this.url + id)
  }

  postTest(test: testModel): Observable<any>{
    return this.http.post<any>(this.url, test);
  }

  putTest(test: testModel): Observable<any>{
    return this.http.put<any>(`${this.url}${test._id}`, test)
  }

  deleteTest(id: string): Observable<any>{
    return this.http.delete<any>(this.url + id)
  }
  

}
