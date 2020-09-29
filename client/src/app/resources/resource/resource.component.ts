import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResourceModel } from '../_models/resource.model';
import { ResourceService } from  '../_services/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})

export class ResourceComponent implements OnInit {

  image: string;
  userId: string;
  check: boolean = true;
  base64textString = [];
  resource: ResourceModel;
  id: string = this.route.snapshot.paramMap.get('id');

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.getResource();
    if(this.router.url !== `/resources/${this.id}/questions` && this.router.url !== `/resources/${this.id}`) {
      this.check = false;
    }
  }

  getResource() {
    this.resourceService.getReourceId(this.id, this.userId).subscribe((data) => {
      this.resource = data;
    })
  }

  putResource() {
    const rs: ResourceModel = {
      _id: this.resource._id,
      name: this.resource.name,
      image: this.resource.image,
      content: this.resource.content,
    }
    this.resourceService.putResource(rs).subscribe();
  }

  deleteResource(id: string) {
    this.resourceService.deleteResource(id).subscribe();
    this.router.navigate(['/resources']);
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
    this.resource.image = 'data:image/png;base64,' + btoa(e.target.result);
  }

  handle(e) {
    this.userId = e;
    this.getResource();
  }

  showListquestion() {
    this.check = true;
  }

  showListtest() {
    this.check = false;
  }

}
