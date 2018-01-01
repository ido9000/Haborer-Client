import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {

  private serverAddress:string = "localhost:8080/HaborerService/";  //item request factory

  constructor(private http:HttpClient) { }

  getListOfStores() {
    this.http.get<storeModule>(this.serverAddress).subscribe(
      data => {
        console.log("User Login: " + data.storeId);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }

  getStoreContent() {
    this.http.get<itemModule>(this.serverAddress).subscribe(
      data => {
        console.log("User itemId: " + data.itemId);
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
    // this.http.get<requestModule>(this.serverAddress).subscribe(
    //   data => {
    //     console.log("User itemId: " + data.itemId);
    //     console.log("itemName: " + data.itemName);
    //     console.log("dateAdded: " + data.dateAdded);
    //     console.log("itemCategory: " + data.itemCategory);
    //     console.log("squadron: " + data.squadron);
    //   },
    //   err => {
    //     console.log("Error occured.")
    //   }
    // );
  }

  getOthersRequstFromMe() {

  }


  postNewRequest(requestStatus:string) {
    this.http.post(this.serverAddress,
      {
        "status": requestStatus,
        "items": "TEST"

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

  postCancelRequest() {

  }

  postEditRequest(requestStatus:string) {
    this.http.post(this.serverAddress,
      {
        "status": requestStatus,

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



  postNewItem() {
    this.http.post(this.serverAddress,
      {
        "status": "1",
        "itemId": "1",
        "itemName": "1",
        "itemCategory": "1",
        "dateAdded": "1",
        "squadron": "1"
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

  postCancelItem() {

  }

  postEditItem() {

  }


}
