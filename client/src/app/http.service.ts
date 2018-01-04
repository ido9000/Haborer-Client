import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Configuration} from "./configuration-file";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {

  private config = new Configuration();

  constructor(private http: HttpClient) {
  }

  getListOfStores() {
    return this.http.get<string[]>(this.config.serverAddress.concat('UserService/Sqaudron/GetAllSquadrons'));
  }

  getStoreContent(storeId) {
    return this.http.get<itemModule[]>(this.config.serverAddress.concat('UserService/Squadron/').concat(storeId));
  }

  getAllMyRequests(storeId) {
    return this.http.get<requestModule>(this.config.serverAddress.concat('UserService/Squadron/Requests/From/').concat(storeId));
  }

  getOthersRequstFromMe(storeId) {
    return this.http.get<requestModule>(this.config.serverAddress.concat('UserService/Squadron/Requests/To/').concat(storeId));

  }
  checkLogin(userName, password){
    return this.http.post<userModule>(this.config.serverAddress.concat('/Squadron/Login'), { },
      {headers: new HttpHeaders().set('Content-Type', 'text/plain').append('userName', userName)
          .append('password', password) }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }


  postEditRequest(request:requestModule) {
    this.http.post(this.config.serverAddress.concat('UserService/Sqaudron/RequestRespond'),
      {
        "_id" :request._id,
        "status" : request.status,
        "fromSquadron" : request.fromSquadron,
        "toSquadron" : request.toSquadron,
        "fDate" : request.fDate,
        "tDate" : request.tDate,
        "comments" : request.comments,
        "item" : request.item,
        "requestRespond" : request.requestRespond

      }, this.config.options)
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  postNewRequests(requests:requestsFactoryModule) {
    this.http.post(this.config.serverAddress.concat('UserService/Squadron/NewRequest'),
      {
        "fromSquadron": requests.fromSquadron,
        "toSquadron": requests.toSquadron,
        "fDate": requests.fDate,
        "tDate": requests.tDate,
        "comments": requests.comments,
        "items": requests.items


      }, this.config.options)
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }



  postNewCountItem(item:itemModule){
     return this.http.post(this.config.serverAddress + "UserService/Squadron/AddItem",
      {
        "itemName": item.itemName,
        "itemCategory": item.itemCategory,
        "squadron": item.squadron,
        "itemCount":item.itemCount,
        "type":"com.Haborer.Entities.CountItem"

      }, this.config.options);
  }
  postNewMakatItem(item:itemModule) {
     return this.http.post(this.config.serverAddress + "UserService/Squadron/AddItem",
      {
        "itemName": item.itemName,
        "itemCategory": item.itemCategory,
        "squadron": item.squadron,
        "itemMakat":item.itemMakat,
        "type":"com.Haborer.Entities.MakatItem"
      }, this.config.options);
  }
  postCancelItem(item:itemModule) {
    this.http.post(this.config.serverAddress.concat('UserService/Squadron/DeleteItem'),
      {
        "_id": item._id,
        "itemName": item.itemName,
        "itemCategory": item.itemCategory,
        "dateAdded": item.dateAdded,
        "squadron": item.squadron
      }, this.config.options)
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  postEditItem(item:itemModule) {
    this.http.post(this.config.serverAddress.concat('UserService/Squadron/UpdateItem'),
      {
        "_id": item._id,
        "itemName": item.itemName,
        "itemCategory": item.itemCategory,
        "dateAdded": item.dateAdded,
        "squadron": item.squadron
      }, this.config.options)
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }


}
