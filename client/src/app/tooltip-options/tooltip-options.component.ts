import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {BodyComponent} from "../body/body.component";
import {Router} from "@angular/router";


@Component({
  selector: 'tooltip-options',
  templateUrl: './tooltip-options.component.html',
  styleUrls: ['./tooltip-options.component.css'],
  providers: [BodyComponent]
})
export class TooltipOptionsComponent implements OnInit {

  store;
  stores: any;
  storesArr: string[];

  constructor(private httpService: HttpService, private _router: Router) {
    this.storesArr = [];
    this.stores = httpService.getListOfStores();
    this.stores.subscribe(store => {
      this.storesArr = store;
    });

  }

  ngOnInit() {  }

  showStore(s) {
    const x= s.split(" ");
    let storeName = x[0];
    localStorage.setItem("storeToShow",storeName);
    this.store = storeName;
    this._router.navigate(["table", storeName]);
  }


}
