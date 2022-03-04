import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(value)
    if(value){
      return "inStock";
    }
   else
   {
     return "Not Available"
   }
  }

}
