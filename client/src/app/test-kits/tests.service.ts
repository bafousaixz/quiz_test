import { Injectable } from '@angular/core';
import { resourceModel } from './resource.model';
import { questionModel } from './question.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestsService {
  url = "http://localhost:3000/resource/"
  url_question = "http://localhost:3000/questions/"
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

  getQuestion(): Observable<any>{
    return this.http.get<any>(this.url_question)
  }

  postQuestion(question: questionModel): Observable<any>{
    return this.http.post<any>(this.url_question, question)
  }
}
