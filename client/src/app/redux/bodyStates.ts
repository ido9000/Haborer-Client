import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

// export const bodyStates = {
//   WELCOME : 0,
//   STORE_1 : 1,
//   STORE_2 : 2,
//   STORE_3 : 3,
// };


@Injectable()
export class BodyStates {

  private messageSource = new BehaviorSubject<string>("welcome");
   bodyselected = this.messageSource.asObservable;

  setStore(store) {
    this.messageSource.next(store);
  }

  // getStore() {
  //   return this.bodyselected;
  // }
}
