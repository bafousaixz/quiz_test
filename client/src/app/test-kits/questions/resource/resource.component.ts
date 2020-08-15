import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResourceService } from  '../../_service/resource.service';
import { resourceModel } from '../../_model/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  public resource: resourceModel;
  constructor(
    public resourceService: ResourceService,
    public route: ActivatedRoute,
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

}
