import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { test_questionModel } from '../model/test_question.model';
@Injectable({
  providedIn: 'root'
})
export class TestQuestionService {
  url="http://localhost:3000/test-question/";

  constructor(
    private http: HttpClient,
  ) { }

  getTest_question(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  getDetail(id: string): Observable<any>{
    return this.http.get<any>(this.url + id)
  }

  postTest_question(test: test_questionModel): Observable<any>{
    return this.http.post<any>(this.url, test);
  }

  putTest_question(test: test_questionModel): Observable<any>{
    return this.http.put<any>(`${this.url}${test._id}`, test)
  }

  deleteTest_question(id: string): Observable<any>{
    return this.http.delete<any>(this.url + id)
  }
  

}
