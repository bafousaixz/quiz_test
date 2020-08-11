import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from '../tests.service';
import { resourceModel } from '../resource.model';
import { questionModel } from '../question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public add_answer: string;
  public base64textString = [];

  public image: string;
  public content: string;
  public id = this.route.snapshot.paramMap.get('id');
  public resource: resourceModel;
  public question: questionModel;
  constructor(
    public service: TestsService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getResource();
    this.getQuestion();
  }

  getResource(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getReourceId(id).subscribe(data =>{
      this.resource = data
    })
  }
  getQuestion(){
    this.service.getQuestion().subscribe(data =>{
      this.question = data
    })
  }

  postQuestion(){
    let q: questionModel = {
      content: this.content,
      image: this.image,
      resource_id: this.id
    }
    console.log(q)
    // this.service.postQuestion(q).subscribe(data=>
    //   console.log(data));
  }



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




  add(){
    this.add_answer="1"
  }

}
