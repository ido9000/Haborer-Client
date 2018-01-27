import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  entry='Makat';
  itemName:string;
  itemCategory:string;
  itemMakat:string;
  itemCount:number;
  message:string;
  respone:any;
  user:userModule;

  constructor(private httpService: HttpService) {
    this.user= JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {  }

  onSelectionChange(entry) {
    this.entry= entry;
  }

  checkSessionActiveForSession(){
    return JSON.parse(localStorage.getItem("user"))!=null;
  }

  sendValues():void {
    this.message=" ";
    if(this.entry=='Makat') {
      this.respone=this.httpService.postNewMakatItem(new item(this.itemName,this.itemCategory,this.itemMakat,this.itemCount,this.user.squadron));
      this.respone.subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
          this.message="נוסף בהצלחה";
        });
    } else {
      this.respone=this.httpService.postNewCountItem(new item(this.itemName,this.itemCategory,this.itemMakat,this.itemCount,this.user.squadron));
      this.respone.subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
          this.message="נוסף בהצלחה";
        });
    }
  }

}

export class item implements itemModule{
  _id: string;
  itemName: string;
  itemCategory: string;
  dateAdded: string;
  squadron: string;
  itemMakat: string;
  itemCount: string;
  taken:boolean;

   constructor(itemName,itemCategory,itemMakat,itemCount,squadron) {
     this.itemName=itemName;
     this.itemCategory=itemCategory;
     this.itemCount=itemCount;
     this.itemMakat=itemMakat;
     this.squadron=squadron;
   }
}
