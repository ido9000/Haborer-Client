import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {

  private serverAddress:string = "localhost:8080/HaborerService/";  //item request factory

  constructor(private http:HttpClient) { }

  getListOfStores() {
     let stores:storeModule[];
    this.http.get<storeModule>(this.serverAddress).subscribe(
      data => {
        console.log("storeId: " + data.storeId);
      },
      err => {
        console.log("Error occured.")
      }
    );
     return stores;
  }

  getStoreContent() {
    this.http.get<itemModule>(this.serverAddress).subscribe(
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
    this.http.get<requestModule>(this.serverAddress).subscribe(
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
    this.http.get<requestModule>(this.serverAddress).subscribe(
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
    this.http.post(this.serverAddress,
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

      })
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
    this.http.post(this.serverAddress,
      {
        "id: " :request.id,
        "status: " : request.status
      })
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
    this.http.post(this.serverAddress,
      {
        "id: " :request.id,
        "status": request.status
      })
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
    this.http.post(this.serverAddress,
      {
        "itemName": item.itemName,
        "itemCategory": item.itemCategory,
        "dateAdded": item.dateAdded,
        "squadron": item.squadron
      })
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
    this.http.post(this.serverAddress,
      {
        "itemId": item.itemId
      })
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
    this.http.post(this.serverAddress,
      {
        "itemId": item.itemId,
        "itemName": item.itemName,
        "itemCategory": item.itemCategory,
        "dateAdded": item.dateAdded,
        "squadron": item.squadron
      })
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
