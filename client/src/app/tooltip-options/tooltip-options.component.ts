import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpService} from "../http.service";
import {TableComponent} from "../table/table.component";
import {BodyComponent} from "../body/body.component";

@Component({
  selector: 'tooltip-options',
  templateUrl: './tooltip-options.component.html',
  styleUrls: ['./tooltip-options.component.css']
})
export class TooltipOptionsComponent implements OnInit {

  stores  = [{storeId: "חנות 1"}, {storeId: "חנות 2"}];//storesArray;
  selected = false;


  constructor(private httpService: HttpService) {
    //this.stores = this.httpService.getListOfStores();
  }

  ngOnInit() {
  }

  showStore(storeId) {
     // this.storeTable=this.storeTable.createNewTable(this.httpService.getStoreContent());
    // this.body.selected=true;
    this.selected=true;
  }

}

export class dummyStore1 implements storeModule {
  storeId: string = "חנות 1";
}

// let storesArray = [dummyStore1, dummyStore2];
export class dummyStore2 implements storeModule {
  storeId: string = "חנות 2";
}

