import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ResourceService } from  '../_services/resource.service';
import { ResourceModel } from '../_models/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  check: boolean = true;
  base64textString = [];
  image: string;
  userId: string;
  resource: ResourceModel;
  _id: string = this.route.snapshot.paramMap.get('id');

  constructor(
    public resourceService: ResourceService,
    public route: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.getResource();
    if(this.router.url === `/resources/${this._id}/tests`){
      this.check = false;
    }
  }

  getResource() {
    const id = this.route.snapshot.paramMap.get('id');
    this.resourceService.getReourceId(id, this.userId).subscribe(data =>{
      this.resource = data;
    })
  }

  putResource() {
    const rs : ResourceModel = {
      _id: this.resource._id,
      name: this.resource.name,
      image: this.resource.image,
      content: this.resource.content,
    }
    this.resourceService.putResource(rs).subscribe();
  }

  deleteResource(id: string) {
    this.resourceService.deleteResource(id).subscribe();
    this.router.navigate(['/test-resources']);
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

  handle(e) {
    this.userId = e;
    this.getResource();
  }

  showListquestion() {
    this.check= true;
  }

  showListtest() {
    this.check = false;
  }

}
