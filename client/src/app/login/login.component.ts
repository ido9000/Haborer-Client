import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;

  constructor(private httpService: HttpService) {  }

  ngOnInit() {
  }

  login(){
    if(this.httpService.checkLogin(this.userName, this.password)){ //TODO: check this call!
      return true;
    } else{
      return false;
    }
  }

}
