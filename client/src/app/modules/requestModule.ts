interface requestModule {
  _id: string;
  status: string;
  fromSquadron: string;
  toSquadron: string;
  fDate: string;
  tDate: string;
  comments: string;
  item: itemModule;
  requestRespond: string;
}


// export class Request implements requestModule{
//   _id: string;
//   status: string;
//   fromSquadron: string;
//   toSquadron: string;
//   fDate: string;
//   tDate: string;
//   comments: string;
//   item: itemModule;
//   requestRespond: string;
//
//   constructor(_id,status,fromSquadron,toSquadron,fDate,tDate,comments,item,requestRespond){
//     this._id = _id;
//     this.status=status;
//     this.fromSquadron=fromSquadron;
//     this.toSquadron=toSquadron;
//     this.fDate=fDate;
//     this.tDate=tDate;
//     this.comments=comments;
//     this.item=item;
//     this.requestRespond=requestRespond;
//   }
//
// }

