import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { testResult } from 'src/app/middle/model/test_result';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {
  url = "http://localhost:3000/test_result/"
  _url = "http://localhost:3000/test_results/"
  constructor(
    private http: HttpClient, 
  ) { }

  getAllResult(): Observable<any>{
    return this.http.get<any>(this._url)
  }

  getResult(id: string): Observable<any>{
    return this.http.get<any>(this._url + id)
  }

  getdetail(id: string): Observable<any>{
    return this.http.get<any>(this.url + id)
  }

  postResult(result: testResult): Observable<any>{
    return this.http.post<any>(this.url, result)
  } 

}