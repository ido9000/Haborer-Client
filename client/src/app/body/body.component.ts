import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TooltipOptionsComponent} from "../tooltip-options/tooltip-options.component";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']/*,
  directive: [TooltipOptionsComponent]*/
})
export class BodyComponent implements OnInit {

   // @Input() selected: boolean ;
   // selected = false;
  // bodys;
  bodyselected:string;

  constructor(private body:BodyStates) {
    //body.setStore(false);
    // this.bodys=body
  }

  ngOnInit() {
    this.body.bodyselected.subscribe(bodyselected => this.bodyselected == bodyselected);
  }

  // ngOnChange() {
  //   this.bodys.getStore();
  // }


}
