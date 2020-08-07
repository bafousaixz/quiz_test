import { Component, OnInit } from '@angular/core';
import { TestsService } from '../tests.service';
import { resourceModel } from '../resource.model';


@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {
  public popup: string;


  public resource: resourceModel;
  public name: string;
 
  constructor(
    private service: TestsService,
  ) { }

  ngOnInit(): void {
    this.get();
  }
 
  get(){
    this.service.getReource().subscribe(data =>{
      console.log(data)
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
