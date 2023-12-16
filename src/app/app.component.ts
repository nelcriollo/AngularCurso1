import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto001';

  nombre = 'Rodriguez Pablo';
  edad = 14;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  

  esActivo() {
    // if (this.activo)
    //   return 'Trabajador Activo';
    // else
    //   return 'Trabajador Inactivo';

    //usamos el operador ternario
    return this.activo ?  'Trabajador Activo' :  'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    // let suma=0;
    // for(let x=0; x<this.sueldos.length; x++)
    //   suma+=this.sueldos[x];
    // return suma;

    return this.sueldos.reduce((a,v)=>(a+=v),0)
  }

  //6 - Captura de eventos
  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  //7 - Directiva ngModel
  

  //9 - Componentes: pasar datos de la componente padre a la componente hija
  valor1: number;
  valor2: number;
  valor3: number
  resultado: string = '';

  constructor() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
  }

  generarAleatorio(): number {
    return Math.trunc(Math.random() * 6) + 1
  }

  tirar() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'Ganó!!';
    } else {
      this.resultado = 'Perdio!!';
    }
  }

  mensaje = '';

  actualizar(tiempo: number){
    this.mensaje = tiempo + '(se actualiza cada 10 segundos)';
  }
  
}
