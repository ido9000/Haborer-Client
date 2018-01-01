import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'tooltip-options',
  templateUrl: './tooltip-options.component.html',
  styleUrls: ['./tooltip-options.component.css']
})
export class TooltipOptionsComponent implements OnInit {

  stores  = [{storeId: "חנות 1"}, {storeId: "חנות 2"}];//storesArray;

  constructor(private httpService: HttpService) {
    //this.stores = this.httpService.getListOfStores();
  }

  ngOnInit() {
  }

}

export class dummyStore1 implements storeModule {
  storeId: string = "חנות 1";
}

export class dummyStore2 implements storeModule {
  storeId: string = "חנות 2";
}

// let storesArray = [dummyStore1, dummyStore2];
