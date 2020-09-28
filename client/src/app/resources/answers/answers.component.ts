import { ActivatedRoute, Params } from '@angular/router';
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
  fix: string;
  _id: string;
  content: string;
  ans: AnswerModel;
  r: boolean = false;
  resource_id: string;
  answer: AnswerModel[];

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: Params) => {
      this.resource_id = param['id'];
    })
    this.getAnswer();
  }

  getAnswer() {
    this.answerService.getAnswer(this.resource_id).subscribe(data => {
      this.answer = data;
    })
  }
  
  postAnswer() {
    const as : AnswerModel = {
      _id: this._id,
      content : this.content,
      right : this.r,
      question_id : this.id,
      resource_id: this.resource_id
    }
    this.answerService.postAnswer(as).subscribe(data => {
      if(data) {
        this.content = '';
        this.r = false;
        this.getAnswer();
      }
    })
  }

  putAnswer(a: AnswerModel) {
    const as : AnswerModel = {
      _id: a._id,
      content : a.content,
      right : a.right,
      question_id : this.id
    }
    this.answerService.putAnswer(as).subscribe();
    this.fix = '';
  }

  deleteAnswer(id: string) {
    this.answerService.deleteAnswer(id).subscribe(data => {
      if(data) {
        this.getAnswer();
      }
    });
  }

  editRight(a) {
    a.right = !a.right;
  }
  
  edit(a) {
    this.fix = a._id;
  }

  addRight() {
    this.r = !this.r;
  }

}
