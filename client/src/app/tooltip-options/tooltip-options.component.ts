import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {BodyComponent} from "../body/body.component";


@Component({
  selector: 'tooltip-options',
  templateUrl: './tooltip-options.component.html',
  styleUrls: ['./tooltip-options.component.css'],
  providers: [BodyComponent]
})
export class TooltipOptionsComponent implements OnInit {

  stores: any;
  storesArr: string[];

  constructor(private httpService: HttpService) {
    this.storesArr = [];
    this.stores = httpService.getListOfStores();
    this.stores.subscribe(store => {
      this.storesArr = store;
    });

  }

  ngOnInit() {  }

  showStore(s) {
    const x= s.split(" ");
    //this.body.setStore(x[1]);
  }


}
