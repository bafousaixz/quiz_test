import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

import { ResourceService } from  '../_service/resource.service';
import { resourceModel } from '../_model/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  list_question: boolean = true;
  list_test: boolean = false;
  create_test: boolean= false;

  base64textString = [];
  image: string;
  resource: resourceModel;
  _id: string = this.route.snapshot.paramMap.get('id');

  constructor(
    public resourceService: ResourceService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getResource()
  }

  getResource(){
    const id = this.route.snapshot.paramMap.get('id');
    this.resourceService.getReourceId(id).subscribe(data =>{
      this.resource = data
    })
  }

  putResource(){
    const rs : resourceModel ={
      _id : this.resource._id,
      Name : this.resource.Name,
      Image : this.resource.Image,
      Content : this.resource.Content,
    }
    this.resourceService.putResource(rs).subscribe();
  }

  deleteResource(id: string){
    this.resourceService.deleteResource(id).subscribe()
    this.router.navigate(['/test-resources'])
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
    this.resource.Image= 'data:image/png;base64,' + btoa(e.target.result);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    let left = document.getElementById("resource-zone").style;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      left.position = "fixed";
      left.top = "1vh";
    } else {
      left.position = "absolute";
      left.top = "22vh";
    }
  } 

  showListquestion(){
    this.list_question = true;
    this.list_test = false;
    this.create_test = false;
  }
  showListtest(){
    this.list_question = false;
    this.list_test = true;
    this.create_test = false;
  }
  showCreatetest(){
    this.list_question = false;
    this.list_test = false;
    this.create_test = true;
  }
}
