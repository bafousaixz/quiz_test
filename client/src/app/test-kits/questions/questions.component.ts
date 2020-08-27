import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

import { QuestionService } from '../_service/question.service';
import { questionModel } from '../_model/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  add_answer: string;
  id_question: string;
  base64textString = [];
  cates =[ "Easy", "Medium", "High"]
  p: number = 1;

  _id: string;
  image: string;
  content: string;
  level: string = "Easy";
  id = this.route.snapshot.paramMap.get('id');
  question: questionModel[];
  qs: questionModel;

  constructor(
    public questionService: QuestionService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getQuestion()
  }
  
  getQuestion(){
    this.questionService.getQuestion().subscribe(data =>{
      this.question = data
    })
  }

  postQuestion(){
    let q: questionModel = {
      _id: this._id,
      Content: this.content,
      Img: this.image,
      Level: this.level,
      Resource_id: this.id
    }
    this.questionService.postQuestion(q).subscribe()
    this.getQuestion();
    this. cancer_add();
  }

  putQuestion(){
    let q: questionModel = {
      _id: this.id_question,
      Content: this.qs.Content,
      Img: this.qs.Img ,
      Level: this.qs.Level,
      Resource_id: this.id
    }
    this.questionService.putQuestion(q).subscribe(data=>{
      const index = this.update(this.qs._id); 
      this.qs[index] = data;
    })
    this.cancer();
  }

  deleteQuestion(id: string){
    this.questionService.deleteQuestion(id).subscribe(data=>{
      this.getQuestion();
    })
  }

//update value
  update(id: string) {
    let result = 0;
    this.question.forEach((q, index) =>{
      if(q._id == id){
        result = index;
      }
    })
    return result-1;
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
    this.qs.Img= 'data:image/png;base64,' + btoa(e.target.result);
  }

//Scroll
  @HostListener('window:scroll', ['$event']) onScrollEvent(){
   
    let a = document.getElementById("set-scroll").style;
    let b = document.getElementById("add-question").style;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      a.position = "fixed";
      a.paddingRight="30%";
      b.width="91%";
    } else {
      a.paddingRight="0";
      a.position = "relative";
      b.width="98%";
    }
  } 

  //Handle UI
  selectLevel(e){
    this.level = e.target.value;
    console.log(this.level)
  }

  showAnswer(q: questionModel){
    this.qs = q;
    this.id_question=this.qs._id
    this.image=""
  }

  add(){
    this.id_question=""
    this.image=""
    this.add_answer="1"
    document.getElementById("add-question").style.height="530px"
  }
  cancer_add(){
    this.content=""
    this.add_answer=""
    this.image=""
    document.getElementById("add-question").style.height="50px"
  }
  cancer(){
    this.id_question=""
  }



}
