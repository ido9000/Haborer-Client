import { Component, OnInit,Input } from '@angular/core';
import {HttpService} from "../http.service";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  // bodyselected: string;
  entry='Makat';
   itemName:string;
   itemCategory:string;
   itemMakat:string;
   itemCount:number;
   message:string;
  respone:any;

  constructor(private httpService: HttpService, private body: BodyStates) {

  }

  ngOnInit() {
    // this.body.bodyselected.bind(bodyselected => this.bodyselected === bodyselected);
  }
  onSelectionChange(entry)
  {
    this.entry= entry;
  }
  showAddItem() {
    this.body.setStore("addUser");
  }
  sendValues():void{
    this.message=" ";
    if(this.entry=='Makat'){
      this.respone=this.httpService.postNewMakatItem(new item(this.itemName,this.itemCategory,this.itemMakat,this.itemCount));
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
    }else{
      this.respone=this.httpService.postNewCountItem(new item(this.itemName,this.itemCategory,this.itemMakat,this.itemCount));
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

   constructor(itemName,itemCategory,itemMakat,itemCount) {
     this.itemName=itemName;
     this.itemCategory=itemCategory;
     this.itemCount=itemCount;
     this.itemMakat=itemMakat;
     this.squadron="156"; //Get from squadron
   }
}
