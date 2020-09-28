import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionModel } from '../_models/question.model';
import { QuestionService } from '../_services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  id = '';
  _id: string;
  img: string;
  image: string;
  easy: boolean;  
  high: boolean;
  p: number = 1;
  medium: boolean;
  content: string;
  id_question: string;
  base64textString = [];
  level: string = "Easy";
  qs: QuestionModel;
  question: QuestionModel[];

  constructor(
    public route: ActivatedRoute,
    public questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: Params) => {
      this.id = param['id'];
    })
    this.getQuestion();
  }
  
  getQuestion() {
    this.questionService.getQuestion().subscribe((data) => {
      this.question = data;
    })
  }

  postQuestion() {
    let q: QuestionModel = {
      _id: this._id,
      content: this.content,
      image: this.img,
      level: this.level,
      resource_id: this.id
    }
    this.questionService.postQuestion(q).subscribe((data) => {
      if(data !== null) {
        this.getQuestion();
        this.cancel_add();
      }
    })   
  }

  putQuestion() {
    let q: QuestionModel = {
      _id: this.id_question,
      content: this.qs.content,
      image: this.qs.image ,
      level: this.level,
      resource_id: this.id
    }
    this.questionService.putQuestion(q).subscribe((data) => {
      if(data !== null) {
        this.getQuestion();
        this.cancel_add();
      }
    })
  }

  deleteQuestion(id: string) {
    this.questionService.deleteQuestion(id).subscribe((data) => {
      if(data) {
        this.getQuestion();
      }
    })
  }

//Base64 image
  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.image = 'data:image/png;base64,' + btoa(e.target.result);
    this.img = 'data:image/png;base64,' + btoa(e.target.result);
    this.qs.image = 'data:image/png;base64,' + btoa(e.target.result);
  }

//Scroll
  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    let a = document.getElementById("set-scroll").style;
    let b = document.getElementById("add-question").style;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      a.position = "fixed";
      a.paddingRight = "30%";
      b.width = "91%";
    } else {
      a.paddingRight = "0";
      a.position = "relative";
      b.width = "98%";
    }
  } 

  //Handle UI
  level1() {
    this.easy = true;
    this.medium = false;
    this.high = false;
    this.level = "Easy";
  }

  level2() {
    this.easy = false;
    this.medium = true;
    this.high = false;
    this.level = "Medium";
  }

  level3() {
    this.easy = false;
    this.medium = false;
    this.high = true;
    this.level = "High";
  }

  showAnswer(q: QuestionModel) {
    this.qs = q;
    this.id_question = this.qs._id;
    this.image = "";
  }

  add() {
    this.id_question = "";
    this.img = "";
    document.getElementById("add").style.opacity = "0";
    document.getElementById("add-question").style.height = "530px";
  }
  
  cancel_add() {
    this.id_question = "";
    this.content = "";
    this.img = "";
    this.easy = false;
    this.medium = false;
    this.high = false;
    document.getElementById("add").style.opacity = "1";
    document.getElementById("add-question").style.height = "50px";
  }

}
