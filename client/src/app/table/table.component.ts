import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  currentUser: userModule = new dummyUser("store1");

  items: any;

  bodyselected: string;

  orderedItems:itemModule[];

  constructor(private httpService: HttpService, private body: BodyStates) {
    this.orderedItems=[];
    this.items = httpService.getStoreContent(this.body.getStore());
    this.items.subscribe(items => {
      this.orderedItems = items;
    });
  }

  ngOnInit() {
    this.body.bodyselected.bind(bodyselected => this.bodyselected === bodyselected);
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
  _id: string;
  itemName: string;
  itemCategory: string;
  dateAdded: string;
  squadron: string;
  itemMakat: string;
  itemCount: string;

  constructor(_id, itemName, itemCategory, dateAdded, squadron, itemMakat, itemCount){
    this._id =_id;
    this.itemName = itemName;
    this.itemCategory = itemCategory;
    this.dateAdded = dateAdded;
    this.squadron = squadron;
    this.itemMakat = itemMakat;
    this.itemCount = itemCount;
  }
}

export class dummyUser implements userModule {
  storeId: string;
  userName:string;
  password:string;
  _id:string;
  firstName:string;
  lastName:string;

  constructor(storeId){
    this.storeId =storeId;

  }
}
