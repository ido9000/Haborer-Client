import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  items  = [new dummyItem("1","1","1","1","1"),
            new dummyItem("2","2","2","2","2")];

  constructor() { }

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
