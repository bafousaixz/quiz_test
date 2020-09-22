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
  check: boolean = true;

  base64textString = [];
  image: string;
  user_id: string;
  resource: resourceModel;
  _id: string = this.route.snapshot.paramMap.get('id');

  constructor(
    public resourceService: ResourceService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getResource()
    if(this.router.url === `/resources/${this._id}/tests`){
      this.check = false
    }
  }

  getResource(){
    const id = this.route.snapshot.paramMap.get('id');
    this.resourceService.getReourceId(id, this.user_id).subscribe(data =>{
      this.resource = data
    })
  }

  putResource(){
    const rs : resourceModel ={
      _id : this.resource._id,
      name : this.resource.name,
      image : this.resource.image,
      content : this.resource.content,
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
    this.resource.image= 'data:image/png;base64,' + btoa(e.target.result);
  }

  // @HostListener('window:scroll', ['$event']) onScrollEvent(){
  //   let left = document.getElementById("resource-zone").style;
  //   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  //     left.position = "fixed";
  //     left.top = "1vh";
  //   } else {
  //     left.position = "absolute";
  //     left.top = "22vh";
  //   }
  // } 

  handle(e){
    this.user_id = e;
    this.getResource();
  }

  showListquestion(){
    this.check= true;
  }
  showListtest(){
    this.check = false;
  }
}
