import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor: string): string {
    if (valor.length === 8) {
        return `${valor.slice(0, 4)}-${valor.slice(4)}`;
    } else if (valor.length === 9) {
        return `${valor.slice(0, 5)}-${valor.slice(5)}`;
    } else if (valor.length === 10) {
        return `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6)}`;
    } else if (valor.length === 11) {
        return `(${valor.slice(0, 3)}) ${valor.slice(3, 7)}-${valor.slice(7)}`;
    } else {
        return valor;
    }
  }

}
