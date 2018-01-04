import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {BodyComponent} from "../body/body.component";
import {BodyStates} from "../redux/bodyStates";

@Component({
  selector: 'tooltip-options',
  templateUrl: './tooltip-options.component.html',
  styleUrls: ['./tooltip-options.component.css'],
  providers: [BodyComponent]
})
export class TooltipOptionsComponent implements OnInit {

  stores: any;
  storesArr: string[];

  bodyselected: string;

  constructor(private httpService: HttpService, private body: BodyStates) {
    this.storesArr = [];
    this.stores = httpService.getListOfStores();
    this.stores.subscribe(store => {
      this.storesArr = store;
    });

  }

  ngOnInit() {
    this.body.bodyselected.bind(bodyselected => this.bodyselected === bodyselected);
  }

  showStore(s) {
    const x= s.split(" ");
    this.body.setStore(x[1]);
  }

  // showStore() {
  //   this.body.setStore("store1");
  // }


}
