import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpService} from "../http.service";
import {TableComponent} from "../table/table.component";
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
  // selected = false;
  // @Input() body: bodyStates;

  // @Input()  name: string;
  // @Output() selected = new EventEmitter<boolean>();
  // selected = false;
  // bodys;
  bodyselected:string;

  constructor(private httpService: HttpService/*, private bodyComponent: BodyComponent*/ , private body:BodyStates) {
    //this.stores = this.httpService.getListOfStores();
    // this.bodys = body
  }

  ngOnInit() {
    // this.body = this.body.WELCOME;
    this.body.bodyselected.subscribe(bodyselected => this.bodyselected == bodyselected);
  }

  showStore() {
     // this.storeTable=this.storeTable.createNewTable(this.httpService.getStoreContent());
     // this.body.selected=true;
    // this.bodyComponent.selected=true;
    //     this.body = this.body.STORE_1;
    this.body.setStore("store1");
  }

}

export class dummyStore1 implements storeModule {
  storeId: string = "חנות 1";
}

// let storesArray = [dummyStore1, dummyStore2];
export class dummyStore2 implements storeModule {
  storeId: string = "חנות 2";
}

