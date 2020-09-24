import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestResult } from 'src/app/middle/models/test_result';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {
  url = "http://localhost:3000/test-results/user_test/"
  _url = "http://localhost:3000/test-results/"
  constructor(
    private http: HttpClient, 
  ) { }

  getAllResult(): Observable<any>{
    return this.http.get<any>(this._url)
  }

  getResult(id: string): Observable<any>{
    return this.http.get<any>(this._url + id)
  }

//nop bai & tinh diem
  postResult(result: TestResult): Observable<any>{
    return this.http.post<any>(this.url, result)
  } 

//get result after test
  getdetail(id: string): Observable<any>{
    return this.http.get<any>(this.url + id)
  }

}
