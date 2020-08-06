import { Component, OnInit } from '@angular/core';
import { TestsService } from '../tests.service';
import { resourceModel } from '../resource.model';


@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {
  public resource: resourceModel;
  public popup: string
  constructor(
    private service: TestsService,
  ) { }

  ngOnInit(): void {
    this.get();
  }
  up(){
    this.popup = 'oke'
  }

  get(){
    this.service.getReource().subscribe(data =>{
      console.log(data)
      this.resource = data
    })
  }

}
