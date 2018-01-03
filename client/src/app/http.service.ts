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

  postNewRequest(request:requestModule) {
    this.http.post(this.config.serverAddress,
      {
        "id: " :request.id,
        "status: " : request.status,
        "fromSquadron: " : request.fromSquadron,
        "toSquadron: " : request.toSquadron,
        "fDate: " : request.fDate,
        "tDate: " : request.tDate,
        "comments: " : request.comments,
        "item: " : request.item,
        "requestRespond: " : request.requestRespond

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

  postEditRequests(requests:requestsFactoryModule) {
    this.http.post(this.config.serverAddress.concat('UserService/Sqaudron/RequestRespond'),
      {
        "fromSquadron": requests.fromSquadron,
        "toSquadron": requests.toSquadron,
        "fDate": requests.fDate,
        "tDate": requests.tDate,
        "comments": requests.comments,
        "item": requests.item


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



  postNewItem(item:itemModule) {
    this.http.post(this.config.serverAddress + "UserService/Squadron/AddItem",
      {
        "_id": item._id,
        "itemCategory": item.itemCategory,
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
