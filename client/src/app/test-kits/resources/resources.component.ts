import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../_services/resource.service'
import { ResourceModel } from '../_models/resource.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  nextpage:boolean = true
  popup: string;
  resource: ResourceModel;
  name: string;
  user_id: string;
  image: string;
  content: string;
  _id: string;
 
  constructor(
    private service: ResourceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.router.url !=='/resources'){
      this.nextpage = false
    }
  }
 
  get(){
    if(this.user_id){
      this.service.getReource(this.user_id).subscribe(data =>{
        this.resource = data
      })
    }
   
  }

  post(){
    let rs: ResourceModel = {
      _id: this._id,
      name: this.name,
      user_id: this.user_id,
      image: this.image,
      content: this.content
    }
    this.service.postResource(rs).subscribe();
    if(this.name != null){
      this.get()
      this.cancer()
    }
    else alert("null")
  }

  handle(e){
    this.user_id = e
    this.get();
  }
  
  next(){
    if(this.router.url ==='/resources'){
      this.nextpage = false
    }
  }

  up(){
    this.popup = 'oke'
  }
  cancer(){
    this.popup =''
  }

}
