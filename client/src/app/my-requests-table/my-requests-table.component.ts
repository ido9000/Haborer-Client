import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-requests-table',
  templateUrl: './my-requests-table.component.html',
  styleUrls: ['./my-requests-table.component.css']
})
export class MyRequestsTableComponent implements OnInit {

  items  = [new dummyRequest("1","1","1","1","1", "9", "0", "1", "1"),
              new dummyRequest("2","2","2","2","2", "0", "4", "1", "1")];

  constructor() { }

  ngOnInit() {
  }

}

//dummy data
export class dummyRequest implements requestModule {
  id: number;
  status: string;
  fromSquadron: string;
  toSquadron: string;
  fDate: string;
  tDate: string;
  comments: string;
  item: string;
  requestRespond: string;

  constructor(id, status, fromSquadron, toSquadron, fDate, tDate, comments, item, requestRespond){
    this.id =id;
    this.status = status;
    this.fromSquadron = fromSquadron;
    this.toSquadron = toSquadron;
    this.fDate = fDate;
    this.tDate = tDate;
    this.comments = comments;
    this.item = item;
    this.requestRespond = requestRespond;
  }
}
