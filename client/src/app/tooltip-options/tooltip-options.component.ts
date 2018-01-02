import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {BodyComponent} from "../body/body.component";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'tooltip-options',
  templateUrl: './tooltip-options.component.html',
  styleUrls: ['./tooltip-options.component.css'],
  providers: [BodyComponent]
})
export class TooltipOptionsComponent implements OnInit {

  stores  = [{storeId: "חנות 1"}, {storeId: "חנות 2"}];//storesArray;

  bodyselected:string;

  constructor(private httpService: HttpService, private body:BodyStates) {

  }

  ngOnInit() {
    // this.body = this.body.WELCOME;
    this.body.bodyselected.arguments(bodyselected => this.bodyselected == bodyselected);
  }

  showStore() {
    this.body.setStore("store1");
  }

}



//dummy data
export class dummyStore1 implements storeModule {
  storeId: string = "חנות 1";
}

// let storesArray = [dummyStore1, dummyStore2];
export class dummyStore2 implements storeModule {
  storeId: string = "חנות 2";
}

