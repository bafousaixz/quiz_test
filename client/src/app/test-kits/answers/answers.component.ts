import { Component, OnInit, Input } from '@angular/core';

import { AnswerModel } from 'src/app/middle/models/answer.model';
import { AnswerService } from 'src/app/middle/services/answer.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() id: string;

  fix:string
  answer: AnswerModel[]
  ans: AnswerModel
  content: string
  r: boolean = false
  _id: string

  constructor(
    private answerService: AnswerService,
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
    const as : AnswerModel = {
      _id: this._id,
      content : this.content,
      right : this.r,
      question_id : this.id
    }
    this.answerService.postAnswer(as).subscribe(data=>{
      if(data!=null){
        this.content="";
        this.r = false;
        this.getAnswer()
      }
    })
  }
  

  putAnswer(a: AnswerModel){
    const as : AnswerModel = {
      _id: a._id,
      content : a.content,
      right : a.right,
      question_id : this.id
    }
    this.answerService.putAnswer(as).subscribe() 
    this.fix =""
  }

  deleteAnswer(id: string){
    this.answerService.deleteAnswer(id).subscribe()
    this.getAnswer()
  }

  editRight(a){
    if(a.right == true){
      a.right = false
    }
    else{
      a.right = true
    }
  }
  edit(a){
    this.fix = a._id
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
