import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

import { ResourceService } from  '../_service/resource.service';
import { QuestionService } from '../_service/question.service';
import { resourceModel } from '../_model/resource.model';
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
  public resource: resourceModel;
  public question: questionModel;

  constructor(
    public resourceService: ResourceService,
    public questionService: QuestionService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  
    this.getResource();
    this.getQuestion();

  }

  getResource(){
    const id = this.route.snapshot.paramMap.get('id');
    this.resourceService.getReourceId(id).subscribe(data =>{
      this.resource = data
    })
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
    window.location.reload();
  }

  putQuestion(){
    let q: questionModel = {
      _id: this.id_question,
      Content: this.question.Content,
      Img: this.image,
      Resource_id: this.id
    }
    this.questionService.putQuestion(q).subscribe()
    window.location.reload()
  }

  deleteQuestion(id: string){
    if(confirm("Sure?")){
      this.questionService.deleteQuestion(id).subscribe()
      window.location.reload()
    }
    else{
      alert("ERROR")
    }
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
  }

//Scroll
  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    let btn = document.getElementById("add-question").style;
    let left = document.getElementById("resource-zone").style;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.position = "fixed";
      btn.top = "0";
      btn.backgroundColor="#A3CB38";
      left.position = "fixed";
      left.top = "-2vh";
    } else {
      btn.position = "absolute";
      btn.top = "22vh";
      btn.backgroundColor="#ffffff"
      left.position = "absolute";
      left.top = "22vh";
    }
  } 

  //Handle UI
  showAnswer(id: string, q: questionModel){
    this.id_question = id;
    this.question = q;
  }

  add(){
    this.add_answer="1"
    document.getElementById("center").style.top="50%"
  }
  cancer_add(){
    this.add_answer=""
    document.getElementById("center").style.top="-50%"
  }
  cancer(){
    this.id_question=""
  }

}
