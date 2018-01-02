import {Component, OnInit} from '@angular/core';
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  bodyselected:string;

  constructor(private body:BodyStates) {

  }

  ngOnInit() {
    this.body.bodyselected.arguments(bodyselected => this.bodyselected == bodyselected);
  }

}
