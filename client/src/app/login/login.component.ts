import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  message:string;
  respone:any;
  user:userModule;

  constructor(private httpService: HttpService) {
    this.user = null;
  }

  ngOnInit() {
  }

  login():void{
    this.message=" ";
    this.respone= this.httpService.checkLogin(this.userName,this.password);
    this.respone.subscribe(userResponse => {
      this.user = userResponse;
      this.update(this.user);
      localStorage.setItem("user",JSON.stringify(this.user));
    });

  }

  update(user){
    if(this.user==null){
      this.message="פרטי התחברות שגויים";
    }else{
      this.message="התחברות בוצעה בהצלחה";

    }
  }

  logout(){
    localStorage.setItem("user",null);
  }

  checkSessionActive(){
    return JSON.parse(localStorage.getItem("user"))!=null;
  }
}
