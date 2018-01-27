import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-my-requests-table',
  templateUrl: './my-requests-table.component.html',
  styleUrls: ['./my-requests-table.component.css']
})
export class MyRequestsTableComponent implements OnInit {

  currentUser: userModule;
  requests : any;
  requestsFromMe : string[];
  commentRespondModule="";
  p: number = 1;

  key: string = 'status'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private httpService: HttpService) {
    this.requestsFromMe=[];
    this.currentUser=JSON.parse(localStorage.getItem("user"));
    this.requests = httpService.getOthersRequstFromMe(this.currentUser.squadron);
    this.requests.subscribe(requests => {
      this.requestsFromMe = requests;
    });
  }

  ngOnInit() {  }

  approveOrDecline(oldRequest, newStatus){
    oldRequest.status=newStatus;
    let newRequest = new Request(oldRequest._id,newStatus,oldRequest.fromSquadron,oldRequest.toSquadron,
                      oldRequest.fDate,oldRequest.tDate,oldRequest.comments,oldRequest.item,this.commentRespondModule);
    this.httpService.postEditRequest(newRequest);
  }

  checkStatus(request){
    let pending=true;
    if(request.status=="APPROVED" || request.status=="DECLINED" || request.status=="CANCELD" || request.status=="TAKEN" ||
    request.status=="RETURNED"){
      pending=false;
    }
    return pending;
  }

  checkSessionActiveForSession(){
    return JSON.parse(localStorage.getItem("user"))!=null;
  }

}

export class Request implements requestModule{
  _id: string;
  status: string;
  fromSquadron: string;
  toSquadron: string;
  fDate: string;
  tDate: string;
  comments: string;
  item: itemModule;
  requestRespond: string;

  constructor(_id,status,fromSquadron,toSquadron,fDate,tDate,comments,item,requestRespond){
    this._id = _id;
    this.status=status;
    this.fromSquadron=fromSquadron;
    this.toSquadron=toSquadron;
    this.fDate=fDate;
    this.tDate=tDate;
    this.comments=comments;
    this.item=item;
    this.requestRespond=requestRespond;
  }

}



