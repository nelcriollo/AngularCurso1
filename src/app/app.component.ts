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
  
}
