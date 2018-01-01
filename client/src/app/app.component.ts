import { Component } from '@angular/core';
import { Http, Response, Headers,RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private options = { headers: new HttpHeaders().set('Content-Type', 'text/plain') };

  constructor (private http: HttpClient) {

    // this.http.get("10.160.3.243:8080/Haborer/Rest").subscribe(data=> {console.log(data)});
    this.http.post("http://localhost:8080/Haborer-Service/UserService/Squadron/AddItem",
      {
        "itemName": "1",
        "itemCategory": "1",
        "squadron": "1",
        "itemMakat":"1"
      }, this.options)
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



