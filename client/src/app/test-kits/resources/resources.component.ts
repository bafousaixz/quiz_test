import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../_service/resource.service'
import { resourceModel } from '../_model/resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  popup: string;
  resource: resourceModel;
  name: string;
  image: string;
  content: string;
  _id: string;
 
  constructor(
    private service: ResourceService,
  ) { }

  ngOnInit(): void {
    this.get();
  }
 
  get(){
    this.service.getReource().subscribe(data =>{
      this.resource = data
    })
  }

  post(){
    let rs: resourceModel = {
      _id: this._id,
      Name: this.name,
      Image: this.image,
      Content: this.content
    }
    this.service.postResource(rs).subscribe();
    if(this.name != null){
      this.get()
      this.cancer()
    }
    else alert("null")
  }



  

  up(){
    this.popup = 'oke'
  }
  cancer(){
    this.popup =''
  }

}
