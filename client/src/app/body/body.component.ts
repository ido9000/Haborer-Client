import {Component, OnInit} from '@angular/core';
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'body-comp',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  bodyselected:string;
  firstOpen = true;

  constructor(private body:BodyStates) {

  }

  ngOnInit() {
    this.body.bodyselected.bind(bodyselected => this.bodyselected == bodyselected);
  }

  getBody() {
    if(this.firstOpen) {
      this.firstOpen = !this.firstOpen;
    }
      return this.body.getStore();
  }



}
