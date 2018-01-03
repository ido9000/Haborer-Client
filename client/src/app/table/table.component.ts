import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  currentUser: userModule = new dummyUser("store2");

  items  = [new dummyItem("1","1","1","1","1", "9", "0"),
            new dummyItem("2","2","2","2","2", "0", "4")];

  orderedItems:itemModule[]=[];

  constructor(private httpService: HttpService) {
    //this.items = httpService.getStoreContent();
  }

  ngOnInit() {
  }

  // createNewTable(storeContent) {
  //
  // }

  getArrayOfNumbers(kamut){
    let a =[0];
    let i;
    for(i=1;i<=kamut;i++){
      a = a.concat([i]);
    }
    return a;
  }

  createNewRequest(){

  }

}


//dummy data
export class dummyItem implements itemModule {
  itemId: string;
  itemName: string;
  itemCategory: string;
  dateAdded: string;
  squadron: string;
  makat: string;
  kamut: string;

  constructor(itemId, itemName, itemCategory, dateAdded, squadron, makat, kamut){
    this.itemId =itemId;
    this.itemName = itemName;
    this.itemCategory = itemCategory;
    this.dateAdded = dateAdded;
    this.squadron = squadron;
    this.makat = makat;
    this.kamut = kamut;
  }
}

export class dummyUser implements userModule {
  storeId: string;

  constructor(storeId){
    this.storeId =storeId;

  }
}
