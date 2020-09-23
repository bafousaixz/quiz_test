import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { QuestionModel } from '../_models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url = "http://localhost:3000/questions/"

  constructor(
    private http: HttpClient, 
  ) { }

  getQuestion(): Observable<any>{
    return this.http.get<any>(this.url).delay(150)
  }

  postQuestion(question: QuestionModel): Observable<any>{
    return this.http.post<any>(this.url, question)
  }

  putQuestion(question: QuestionModel): Observable<any>{
    return this.http.put<any>(`${this.url}${question._id}`, question)
  }

  deleteQuestion(id: string): Observable<any>{
    return this.http.delete<any>(this.url + id)  
  }
  
}
