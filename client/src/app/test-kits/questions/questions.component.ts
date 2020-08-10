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








  add(){
    this.add_answer="1"
  }

}
