import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, activo: true): string {
    value = value.toLocaleLowerCase();
    let nombres: string[] = value.split(' ');

    if (activo) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substring(1);
      });
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      return '';
    }
    return nombres.join('');
  }
}
