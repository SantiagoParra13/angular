import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasena'
})
export class ConstraseñaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean=true): string {
    return( mostrar)? '*'.repeat(value.length): value;
  }

}
