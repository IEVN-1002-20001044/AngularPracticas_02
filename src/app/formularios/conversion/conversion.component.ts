import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  num1 = 0;
  operacion: string = '';
  resultado: number | string = 0;
  grados: string='';

  opcion() {
    const tempe = Number(this.num1);
    switch (this.operacion) {
      case 'converFare':
        this.resultado = ((9/5)*tempe)+32; 
        this.grados='°F';
        break;
      case 'converCel':
        this.resultado = (tempe-32)*(5/9);
        this.grados='°C';
        break;
      default:
        this.resultado = 0;
        break;
    }
}
}