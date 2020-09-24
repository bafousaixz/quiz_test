import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerModel } from '../models/answer.model'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  url = "http://localhost:3000/answers/"
  constructor(
    private http: HttpClient
  ) { }

    getAnswer(): Observable<any>{
      return this.http.get<any>(this.url)
    }

    postAnswer(answer: AnswerModel): Observable<any>{
      return this.http.post<any>(this.url, answer)
    }

    putAnswer(answer: AnswerModel): Observable<any>{
      return this.http.put<any>(`${this.url}${answer._id}`, answer)
    }

    deleteAnswer(id: string): Observable<any>{
      return this.http.delete<any>(this.url + id)
    }

}