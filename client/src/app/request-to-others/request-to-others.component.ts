import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'app-request-to-others',
  templateUrl: './request-to-others.component.html',
  styleUrls: ['./request-to-others.component.css']
})
export class RequestToOthersComponent implements OnInit {

  currentUser: userModule;
  requests : any;
  bodyselected: string;
  requestsFromMe : string[];
  commentRespondModule="";

  constructor(private httpService: HttpService, private body: BodyStates) {
    this.requestsFromMe=[];
    this.requests = httpService.getAllMyRequests(this.body.getStore());
    this.requests.subscribe(requests => {
      console.log(requests);
      this.requestsFromMe = requests;
    });
  }

  ngOnInit() {
    this.body.bodyselected.bind(bodyselected => this.bodyselected === bodyselected);
  }

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
