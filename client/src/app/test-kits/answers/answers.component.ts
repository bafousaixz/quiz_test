import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { answerModel } from 'src/app/middle/model/answer.model';
import { AnswerService } from 'src/app/middle/service/answer.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() id: string;

  fix:string
  answer: answerModel[]
  ans: answerModel
  content: string
  r: boolean = false
  _id: string

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
    this.answerService.postAnswer(as).subscribe(data=>{
      if(data!=null){
        this.content="";
        this.r = false;
        this.getAnswer()
      }
    })
    
  }
  

  putAnswer(a: answerModel){
    const as : answerModel = {
      _id: a._id,
      Content : a.Content,
      Right : a.Right,
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
    if(a.Right == true){
      a.Right = false
    }
    else{
      a.Right = true
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
