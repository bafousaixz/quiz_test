import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestQuestionModel } from '../models/test_question.model';

@Injectable()
export class TestQuestionService {
  
  url = "http://localhost:3000/test-questions/";

  constructor(
    private http: HttpClient,
  ) { }

  getTest_question(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  getDetail(id: string): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

  postTestQuestion(test: TestQuestionModel): Observable<any> {
    return this.http.post<any>(this.url, test)
  }

  putTestQuestion(test: TestQuestionModel): Observable<any> {
    return this.http.put<any>(`${this.url}${test._id}`, test)
  }

  deleteTestQuestion(id: string): Observable<any> {
    return this.http.delete<any>(this.url + id)
  }

}
