import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/delay'

import { testModel } from '../_model/test.model';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  url="http://localhost:3000/tests/";

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

  deleteTest(id: string): Observable<any>{
    return this.http.delete<any>(this.url + id)
  }
  

}
