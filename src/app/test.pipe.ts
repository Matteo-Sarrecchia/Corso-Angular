import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(x:any): any {
    if (x) {
      return x
    } else{
      return 'null';
    }
    
  }

}
