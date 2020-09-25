import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResourceModel } from '../_models/resource.model';
import { ResourceService } from '../_services/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  id: string;
  name: string;
  popup: string;
  image: string;
  user_id: string;
  content: string;
  resource: ResourceModel;
 
  constructor(
    public route: ActivatedRoute,
    private resourceService: ResourceService,
  ) { }

  ngOnInit(): void {
  }
 
  get() {
    if(this.user_id) {
      this.resourceService.getReource(this.user_id).subscribe(data => {
        this.resource = data;
      })
    }
  }

  post() {
    let rs: ResourceModel = {
      _id: this.id,
      name: this.name,
      user_id: this.user_id,
      image: this.image,
      content: this.content
    }
    this.resourceService.postResource(rs).subscribe(data => {
      this.get();
      this.cancer();
    });
  }

  handle(e) {
    this.user_id = e;
    this.get();
  }
  
  up() {
    this.popup = 'oke';
  }
  
  cancer() {
    this.popup = '';
  }

}
