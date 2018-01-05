import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'app-my-requests-table',
  templateUrl: './my-requests-table.component.html',
  styleUrls: ['./my-requests-table.component.css']
})
export class MyRequestsTableComponent implements OnInit {

  currentUser: userModule;
  requests : any;
  // bodyselected: string;
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
    // this.body.bodyselected.bind(bodyselected => this.bodyselected === bodyselected);
  }

  approveOrDecline(oldRequest, newStatus){
    oldRequest.status=newStatus;
    let newRequest = new Request(oldRequest._id,newStatus,oldRequest.fromSquadron,oldRequest.toSquadron,
                      oldRequest.fDate,oldRequest.tDate,oldRequest.comments,oldRequest.item,this.commentRespondModule);
    this.httpService.postEditRequest(newRequest);
  }

  checkStatus(request){
    let pending=true;
    if(request.status=="APPROVED" || request.status=="DECLINED"){
      pending=false;
    }
    return pending;
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
