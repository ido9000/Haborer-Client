import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Configuration} from "./configuration-file";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {
  stores : string[];
  // private serverAddress:string = "localhost:8080/HaborerService/";  //item request factory
  // private options = { headers: new HttpHeaders().set('Content-Type', 'text/plain') };

  private config = new Configuration();

  constructor(private http: HttpClient) {
    this.stores = [];
  }

  getListOfStores() {
    return this.http.get<string[]>(this.config.serverAddress.concat('UserService/Sqaudron/GetAllSquadrons'));

  }

  getStoreContent(storeId) {
    this.http.get<itemModule>(this.config.serverAddress).subscribe(
      data => {
        console.log("itemId: " + data.itemId);
        console.log("itemName: " + data.itemName);
        console.log("dateAdded: " + data.dateAdded);
        console.log("itemCategory: " + data.itemCategory);
        console.log("squadron: " + data.squadron);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }

  getAllMyRequests() {
    this.http.get<requestModule>(this.config.serverAddress).subscribe(
      data => {
        console.log("id: " + data.id);
        console.log("status: " + data.status);
        console.log("fromSquadron: " + data.fromSquadron);
        console.log("toSquadron: " + data.toSquadron);
        console.log("fDate: " + data.fDate);
        console.log("tDate: " + data.tDate);
        console.log("comments: " + data.comments);
        console.log("item: " + data.item);
        console.log("requestRespond: " + data.requestRespond);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }

  getOthersRequstFromMe() {
    this.http.get<requestModule>(this.config.serverAddress).subscribe(
      data => {
        console.log("id: " + data.id);
        console.log("status: " + data.status);
        console.log("fromSquadron: " + data.fromSquadron);
        console.log("toSquadron: " + data.toSquadron);
        console.log("fDate: " + data.fDate);
        console.log("tDate: " + data.tDate);
        console.log("comments: " + data.comments);
        console.log("item: " + data.item);
        console.log("requestRespond: " + data.requestRespond);
      },
      err => {
        console.log("Error occured.")
      }
    );
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

  postCancelRequest(request:requestModule) {
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

  postEditRequest(request:requestModule) {
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



  postNewItem(item:itemModule) {
    this.http.post(this.config.serverAddress + "UserService/Squadron/AddItem",
      {
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

  postCancelItem(item:itemModule) {
    this.http.post(this.config.serverAddress,
      {
        "itemId": item.itemId,
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
    this.http.post(this.config.serverAddress,
      {
        "itemId": item.itemId,
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
