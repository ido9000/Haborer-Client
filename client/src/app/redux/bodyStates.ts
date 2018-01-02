import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class BodyStates {

  private messageSource = new BehaviorSubject<string>('welcome');
   bodyselected = this.messageSource.asObservable;

  setStore(store) {
    this.messageSource.next(store);
  }

}
