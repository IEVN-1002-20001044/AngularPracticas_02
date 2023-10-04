import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {

  num1 = 0;
  num2 = 0;
  resultado: number = 0;
  proceso: string = '';

  sumaMulti() {
    this.resultado = this.num1 * this.num2;
    this.proceso = this.factorizacion(this.num1, this.num2);
  }
  factorizacion(num1: number, num2: number): string {
    let resultado = '';
    for (let i = 0; i < num2; i++) {
        resultado += num1;
        if (i < num2 - 1) {
            resultado += ' + ';
        }
    }
    return resultado;
}
}

