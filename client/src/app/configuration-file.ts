import {HttpHeaders} from "@angular/common/http";

export class Configuration {

  serverAddress:string = "localhost:8080/HaborerService/";  //item request factory
  options = { headers: new HttpHeaders().set('Content-Type', 'text/plain') };

  constructor() {

  }
}
