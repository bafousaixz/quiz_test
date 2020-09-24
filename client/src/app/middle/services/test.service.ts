import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestModel } from '../models/test.model';

@Injectable()
export class TestService {
  
  url = "http://localhost:3000/tests/";
  start = "http://localhost:3000/tests/start/";
   
  constructor(
    private http: HttpClient,
  ) { }

  getTest(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  getDetail(id: string): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

  postTest(test: TestModel): Observable<any> {
    return this.http.post<any>(this.url, test)
  }

  putTest(test: TestModel): Observable<any> {
    return this.http.put<any>(`${this.url}${test._id}`, test)
  }

  deleteTest(id: string): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }

//start test 
  getTittle(id: string): Observable<any> {
    return this.http.get<any>(this.start + id)
  }

  checkPassword(test: TestModel):Observable<any> {
    return this.http.post<any>(this.start, test)
  }
  
}
