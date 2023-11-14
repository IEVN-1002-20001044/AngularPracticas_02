import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})


export class DatosComponent implements OnInit {
  evaluacionn!:FormGroup;
  saludo:string = '';
  res:string = '';
  img:string = '';
  
  ngOnInit(): void {    
    this.evaluacionn = new FormGroup ({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      sexo: new FormControl(''),
      dd: new FormControl(''),
      mm: new FormControl(''),
      yyyy: new FormControl(''),
      p1: new FormControl(''),
      p2: new FormControl(''),
      p3: new FormControl(''),
      p4: new FormControl(''),
      p5: new FormControl(''),
    })
  }

  onSubmit(){
    this.saludo = 'Hola '+this.sx()+' '+this.evaluacionn.controls['nombre'].value+' '
    +this.evaluacionn.controls['apaterno'].value+' '
    +this.evaluacionn.controls['amaterno'].value+' tienes '
    +this.calcedad()+' años y tu signo chino es '+this.signo();

    this.res = 'La calificacion de tu prueba es de: '+this.prueba();
  }

  sx(): string{
    return this.evaluacionn.controls['sexo'].value == 'M' ? 'Sr.' : 'Sra.';
  }

  calcedad(): string{
    var bday: Date = new Date(this.evaluacionn.controls['yyyy'].value,this.evaluacionn.controls['mm'].value,this.evaluacionn.controls['dd'].value);
    var today: Date = new Date();

    var age: number = today.getFullYear() - bday.getFullYear();

    var month: number = today.getMonth() - bday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < bday.getDate())) {
        age--;
    }

    return age.toString();
  }

  signo(): string{
    var sn:string = '';
    const arr = [
      { id: '🐀  Rata', yrs: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020] },
      { id: '🐂  Buey', yrs: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021] },
      { id: '🐯  Tigre', yrs: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022] },
      { id: '🐰  Conejo', yrs: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023] },
      { id: '🐉  Dragon', yrs: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024] },
      { id: '🐍   Serpiente', yrs: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025] },
      { id: '🐎   Caballo', yrs: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026] },
      { id: '🐐   Cabra', yrs: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027] },
      { id: '🐒   Mono', yrs: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028] },
      { id: '🐓   Gallo', yrs: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029] },
      { id: '🦮   Perro', yrs: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030] },
      { id: '🐷   Cerdo', yrs: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031] }
    ];

    arr.forEach(element => {
      if(element.yrs.includes(this.evaluacionn.controls['yyyy'].value)){
        sn=element.id;
      }
    });

    this.img = sn;
    return sn;
  }

  prueba(): string{
    var answ:number = 0;
    if(this.evaluacionn.controls['p1'].value == 'a'){answ++;}
    if(this.evaluacionn.controls['p2'].value == 'c'){answ++;}
    if(this.evaluacionn.controls['p3'].value == 'b'){answ++;}
    if(this.evaluacionn.controls['p4'].value == 'd'){answ++;}
    if(this.evaluacionn.controls['p5'].value == 'a'){answ++;}
    answ = answ*2;

    return answ.toString();
  }
}