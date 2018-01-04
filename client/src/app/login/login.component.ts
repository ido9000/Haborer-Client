import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private httpService: HttpService,private router:Router, private user:UserService) { }
  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
  	this.httpService.checkLogin(username,password);
  	if(this.httpService.checkLogin(username,password)) {
       this.user.setUserLoggedIn();
       console.log("user "+this.user.username+ " is logged in!!!")
      // this.user.setUserLoggedIn();
  		// this.router.navigate(['dashboard']);
  	}
  }

}