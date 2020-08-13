import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../_service/resource.service'
import { resourceModel } from '../_model/resource.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public popup: string;
  public resource: resourceModel;
  public name: string;
 
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
      name: this.name
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
