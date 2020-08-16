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
  public add_answer: string;
  public id_question: string;
  public base64textString = [];

  public _id: string;
  public image: string;
  public content: string;
  public id = this.route.snapshot.paramMap.get('id');
  public question: questionModel[];
  public qs: questionModel;

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
      Img: this.qs.Img,
      Resource_id: this.id
    }
    this.questionService.putQuestion(q).subscribe(data=>{
      const index = this.update(this.qs._id); 
      this.qs[index] = data;
      console.log(data)
    })
    this.image="";
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
    this.image = 'data:image/png;base64,' + btoa(e.target.result)
    this.qs.Img = 'data:image/png;base64,' + btoa(e.target.result)
  }

//Scroll
  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    let btn = document.getElementById("add-question").style;
    let left = document.getElementById("resource-zone").style;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.position = "fixed";
      btn.top = "-2px";
      left.position = "fixed";
      left.top = "0";
    } else {
      btn.position = "absolute";
      btn.top = "20vh";
      left.position = "absolute";
      left.top = "22vh";
    }
  } 

  //Handle UI
  showAnswer(q: questionModel){
    this.qs = q;
    this.id_question=this.qs._id
  }

  add(){
    this.add_answer="1"
    document.getElementById("center").style.top="50%"
  }
  cancer_add(){
    this.add_answer=""
    this.image=""
    document.getElementById("center").style.top="-50%"
  }
  cancer(){
    this.id_question=""
  }

}
