import {HttpHeaders} from "@angular/common/http";

export class Configuration {

  serverAddress = 'http://localhost:8080/Haborer-Service/';

  options = { headers: new HttpHeaders().set('Content-Type', 'text/plain') };

  constructor() {

  }
}
