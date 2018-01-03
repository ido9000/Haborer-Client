import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  items  = [new dummyItem("1","1","1","1","1"),
            new dummyItem("2","2","2","2","2")];

  constructor(private httpService: HttpService) {
    //this.items = httpService.getStoreContent();
  }

  ngOnInit() {
  }

  createNewTable(storeContent) {

  }

}



//dummy data
export class dummyItem implements itemModule {
  itemId: string;
  itemName: string;
  itemCategory: string;
  dateAdded: string;
  squadron: string;

  constructor(itemId, itemName, itemCategory, dateAdded, squadron){
    this.itemId =itemId;
    this.itemName = itemName;
    this.itemCategory = itemCategory;
    this.dateAdded = dateAdded;
    this.squadron = squadron;
  }

}
