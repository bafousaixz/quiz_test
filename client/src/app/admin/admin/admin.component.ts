import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  style: boolean
  constructor() { }

  ngOnInit(): void {
  }

  create(){
    this.style = true
  }
  list(){
    this.style = false
  }

}
