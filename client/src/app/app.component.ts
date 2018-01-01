import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  constructor (private http: Http ) {

    // this.http.get("10.160.3.243:8080/Haborer/Rest").subscribe(data=> {console.log(data)});

    // let head = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: head });
    // this.http.post("localhost:8080/HaborerService/Sqadron/AddItem",
    //   JSON.stringify({
    //     "itemName": "1",
    //     "itemCategory": "1",
    //     "dateAdded": "1",
    //     "squadron": "1"
    //   }))
    //   .subscribe(
    //     (val) => {
    //       console.log("POST call successful value returned in body",
    //         val);
    //     },
    //     response => {
    //       console.log("POST call in error", response);
    //     },
    //     () => {
    //       console.log("The POST observable is now completed.");
    //     });



  }
}



