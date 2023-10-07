import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre: string = '';
  cant: number = 0;
  cantBoletos: number = 0;
  tarjeta: string = '';
  pagar: number = 0;
  descuento: number = 0;
  total: number |string = 0;
  signo: string = '$';
  pedidoANom: string = '';
  restriccionBoletos: string = '';
  tipoDescuento: string = '';
  boletosMaximos: number = 0;
  impresion:string='';



  proceso() {
    const cant=this.cant;
    this.boletosMaximos = this.cant * 7;
    if(isNaN(this.cant) && isNaN(this.cantBoletos)){
      this.boletosMaximos = this.cant * 7;
    }
    if (this.cantBoletos > this.boletosMaximos ) {
      this.total = "0.00 ......................................... "+this.cant+" persona(s) no puede comprar más de " +this.boletosMaximos+" boletos. Intente de nuevo.";
    }

    else if ( this.tarjeta === 'no' && this.cantBoletos <= this.boletosMaximos && this.cantBoletos <=2) {
      this.pagar=this.cantBoletos*12;
      this.tipoDescuento='0%';
      this.descuento = 0;
      this.total=(this.cantBoletos*12);
    }
    else if ( this.tarjeta === 'no' && this.cantBoletos <= this.boletosMaximos &&  this.cantBoletos <=5) {
      this.pagar=this.cantBoletos*12;
      this.tipoDescuento='10%';
      this.descuento = ((this.cantBoletos * 12) * 0.10);
      this.total=((this.cantBoletos*12)-this.descuento);
    }
    else if (this.tarjeta === 'no' && this.cantBoletos <= this.boletosMaximos && this.cantBoletos >= 6 ) {
      this.pagar=this.cantBoletos*12;
      this.tipoDescuento='15%';
      this.descuento = ((this.cantBoletos * 12) * 0.15);
      this.total=((this.cantBoletos*12)-this.descuento);
    }
    else if (this.tarjeta === 'si' && this.cantBoletos <= this.boletosMaximos && this.cantBoletos <= 2) {
      this.pagar=this.cantBoletos*12;
      this.tipoDescuento='0% - 10% adicional';
      this.descuento = ((this.pagar) * 0.10);
      this.total=((this.pagar)-this.descuento);
    } 
    else if (this.tarjeta === 'si' && this.cantBoletos <= this.boletosMaximos && this.cantBoletos <= 5) {
      this.pagar=this.cantBoletos*12;
      this.tipoDescuento='10% - 10% adicional';
      this.total= (((this.pagar) * 0.90) *0.90);
    }
    else if (this.tarjeta === 'si' && this.cantBoletos <= this.boletosMaximos && this.cantBoletos >= 6 ) {
      this.pagar=this.cantBoletos*12;
      this.tipoDescuento='15% - 10% adicional';
      this.total= (((this.pagar) * 0.90) *0.85);
    }
    
  
  }
  salir() {
    this.nombre = '';
    this.cant = 0;
    this.cantBoletos = 0;
    this.tarjeta = '';
    this.pagar = 0;
    this.descuento = 0;
    this.total = 0;
    this.signo = '';
    this.pedidoANom = '';
    this.restriccionBoletos = '';
    this.tipoDescuento = '';
  }
}

