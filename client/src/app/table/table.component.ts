import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  currentUser: userModule;
  currentStore :string;
  items: any;
  orderedItems:itemModule[];
  fDate;
  tDate;
  comments;
  chosenItems=[];

  constructor(private httpService: HttpService, private route: ActivatedRoute) {

    this.route.params.subscribe(
      params => {this.currentStore = params['store'];

        this.currentUser=JSON.parse(localStorage.getItem("user"));
        this.currentStore=localStorage.getItem("storeToShow");
        this.orderedItems=[];
        this.items = httpService.getStoreContent(this.currentStore);
        this.items.subscribe(items => {
          this.orderedItems = items;
        });
      }
    );
  }

  ngOnInit() {  }

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
    let newRequestsFactory = new requestsFactory(this.currentUser.squadron,this.currentStore, this.fDate,this.tDate,this.comments,this.chosenItems);
    this.httpService.postNewRequests(newRequestsFactory);
    alert('הבקשה נשלחה');
  }

  saveItemCount(item){
    this.httpService.postEditItem(item);
    alert('העדכון נשמר');
  }

  deleteItem(item){
    if(confirm('למחוק את הבקשה?')) {
      const index: number = this.orderedItems.indexOf(item);
      if (item.itemMakat) {
        this.httpService.postCancelMakatItem(item);
      } else {
        this.httpService.postCancelCountItem(item);
      }

      this.orderedItems.splice(index, 1);
    }
  }

  checkSessionActiveForSession(){
    return JSON.parse(localStorage.getItem("user"))!=null;
  }

  checkIfThisIsUsersStore(){
    if(this.currentUser){
      if(this.currentUser.squadron==this.currentStore) {
        return true;
      } else if(this.currentUser.squadron!=this.currentStore) {
        return false;
      }
    } else {
      return true;
    }
  }

  checkIfOthersStore(){

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


