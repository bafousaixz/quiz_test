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
  answer: answerModel[]
  ans: answerModel
  content: string
  right: boolean = false
  r: boolean = false
  _id: string
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
      Right : this.r,
      question_id : this.id
    }
    this.answerService.postAnswer(as).subscribe()
    this.content=""
    this.right=false
    this.getAnswer()
  }
  

  putAnswer(a: answerModel){
    if(a.Right == true){
      a.Right = false
    }
    else{
      a.Right = true
    }
    const as : answerModel = {
      _id: a._id,
      Content : a.Content,
      Right : a.Right,
      question_id : this.id
    }
    this.answerService.putAnswer(as).subscribe() 
    console.log(as)
  }

  deleteAnswer(id: string){
    this.answerService.deleteAnswer(id).subscribe()
    this.getAnswer()
  }


  add_right(){
    if(this.r == true){
      this.r = false
    }
    else{
      this.r = true
    }
  }


}
