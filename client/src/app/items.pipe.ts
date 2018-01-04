import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'items'
})
export class ItemsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let a="";
    if(value.itemMakat){
      a="מקט: " + value.itemMakat;
    } else if (value.itemCount){
      a="כמות: " + value.itemCount
    }
    return value.itemName + "," + a;
  }

}
