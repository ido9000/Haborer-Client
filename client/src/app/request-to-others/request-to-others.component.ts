import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-request-to-others',
  templateUrl: './request-to-others.component.html',
  styleUrls: ['./request-to-others.component.css']
})
export class RequestToOthersComponent implements OnInit {

  currentUser: userModule = new dummyUser("155");
  requests : any;
  requestsFromMe : string[];
  commentRespondModule="";

  constructor(private httpService: HttpService) {
    this.requestsFromMe=[];
    this.requests = httpService.getAllMyRequests(this.currentUser.squadron);
    this.requests.subscribe(requests => {
      console.log(requests);
      this.requestsFromMe = requests;
    });
  }

  ngOnInit() {  }

  doAction(oldRequest, newStatus){
    oldRequest.status=newStatus;
    let newRequest = new Request(oldRequest._id,newStatus,oldRequest.fromSquadron,oldRequest.toSquadron,
      oldRequest.fDate,oldRequest.tDate,oldRequest.comments,oldRequest.item,this.commentRespondModule);
    this.httpService.postEditRequest(newRequest);
  }

  checkStatusForCancel(request){
    let cacnel=false;
    if(request.status=="PENDING" || request.status=="APPROVED"){
      cacnel=true;
    }
    return cacnel;
  }

  checkStatusForTake(request){
    let take=false;
    if(request.status=="APPROVED"){
      take=true;
    }
    return take;
  }

  checkStatusForReturn(request){
    let returned=false;
    if(request.status=="TAKEN"){
      returned=true;
    }
    return returned;
  }

  checkStatusComments(request){
    let comments=false;
    if(request.status=="PENDING" || request.status=="APPROVED" || request.status=="TAKEN"){
      comments=true;
    }
    return comments;
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


//dummy data
export class dummyUser implements userModule {
  squadron: string;
  userName:string;
  password:string;
  _id:string;
  firstName:string;
  lastName:string;

  constructor(squadron){
    this.squadron =squadron;

  }
}
