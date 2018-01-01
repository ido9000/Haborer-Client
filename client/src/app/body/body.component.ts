import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TooltipOptionsComponent} from "../tooltip-options/tooltip-options.component";

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() selected: boolean ;
  // selected = false;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChange() {
    this.selected
  }


}
