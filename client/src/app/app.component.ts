import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (private http: Http) {

    // this.http.get("10.160.3.243:8080/Haborer/Rest").subscribe(data=> {console.log(data)});
  }
}



