import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {BodyStates} from "../redux/bodyStates";
import {Request} from "../request-to-others/request-to-others.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  currentUser: userModule = new dummyUser("store2");
  currentStore = "155";
  items: any;
  bodyselected: string;
  orderedItems:itemModule[];
  fDate;
  tDate;
  comments;
  chosenItems=[];

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

  getArrayOfNumbers(kamut){
    let a =[0];
    let i;
    for(i=1;i<=kamut;i++){
      a = a.concat([i]);
    }
    return a;
  }

  clickOnCheck(item){
    if(this.chosenItems.includes(item)){
      //delete item
      this.chosenItems = this.chosenItems.filter(i => i !== item);
    } else {
      //add item
      this.chosenItems.push(item);
    }
  }

  createNewRequest(item){
    // let newRequestsFactory = new requestsFactory(this.currentUser.squadron,item.squadron, this.fDate,this.tDate,this.comments,this.chosenItems);
    let newRequestsFactory = new requestsFactory(this.currentStore,this.currentStore, this.fDate,this.tDate,this.comments,this.chosenItems);
    this.httpService.postNewRequests(newRequestsFactory);
  }

  saveItemCount(item){
    this.httpService.postEditItem(item);
  }

  deleteItem(item){
    if(item.itemMakat){
      this.httpService.postCancelMakatItem(item);
    } else {
      this.httpService.postCancelCountItem(item);
    }
  }

}

export class requestsFactory implements requestsFactoryModule{
  fromSquadron: string;
  toSquadron: string;
  fDate: string;
  tDate: string;
  comments: string;
  items: itemModule[];

  constructor(fromSquadron,toSquadron,fDate,tDate,comments,items){
    this.fromSquadron=fromSquadron;
    this.toSquadron=toSquadron;
    this.fDate=fDate;
    this.tDate=tDate;
    this.comments=comments;
    this.items=items;
  }

}



//dummy data
export class dummyUser implements userModule {
  squadron: string;
  userName:string;
  password:string;
  _id:string;
  firstName:string;
  lastName:string;

  constructor(squadron){
    this.squadron =squadron;

  }
}
