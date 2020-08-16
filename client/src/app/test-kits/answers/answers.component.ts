import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { answerModel } from '../_model/answer.model';
import { AnswerService } from '../_service/answer.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  public answer: answerModel[]
  public ans: answerModel
  public content: string
  public right: boolean = false
  public _id: string
  @Input() id: string;

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAnswer()
  }

  getAnswer(){
    this.answerService.getAnswer().subscribe(data =>{
      this.answer = data;
    })
  }
  
  postAnswer(){
    const as : answerModel = {
      _id: this._id,
      Content : this.content,
      Right : this.right,
      Question_id : this.id
    }
    this.answerService.postAnswer(as).subscribe()
    this.content=""
    this.getAnswer()
  }
  

  putAnswer(a: answerModel){
    const as : answerModel = {
      _id: a._id,
      Content : a.Content,
      Right : a.Right,
      Question_id : this.id
    }
    this.answerService.putAnswer(as).subscribe() 
  }

  deleteAnswer(id: string){
    this.answerService.deleteAnswer(id).subscribe()
    this.getAnswer()
  }


}
