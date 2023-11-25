import { Component } from '@angular/core';
import { Articulos } from '../../model';

@Component({
  selector: 'app-directivang-model',
  templateUrl: './directivang-model.component.html',
  styleUrls: ['./directivang-model.component.scss']
})
export class DirectivangModelComponent {
  articulos: Array<Articulos> = [];

  codigo = 0;
  descripcion = '';
  precio = 0;

  //funcion para agregar
  agregar() {
    if (!this.codigo || !this.descripcion.length || !this.precio) {
      alert("todos los campos son obligatorios")
      return;
    }
    //usamos la funcion buscarArticulo
    if (this.buscarArticulo(this.codigo)) {
      alert("no se puede agregar este articulo porque ya existe uno con el mismo codigo")
      return;
    }
    alert("articulo agregado correctamente")

    const articulo = new Articulos(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo)

    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;

  }

  //funcion borrar
  borrar(codigo: number) {
    const resultado = confirm("¿Desea eliminar el registro?")
    if (resultado) {
      this.articulos = this.articulos.filter((e) => e.codigo !== codigo);
    }
  }

  //funcion para buscar articulo
  buscarArticulo(codigo: number) {
    return this.articulos.find((e) => e.codigo == codigo);
  }

  //funcion para seleccionar una fila
  seleccionar(codigo: number) {
    let articulo: any = this.buscarArticulo(codigo);

    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
  }

  //funcion para modificar
  modificar() {
    if (!this.codigo) {
      alert("debe especificar el código")
      return;
    }

    let articulo: any = this.buscarArticulo(this.codigo);

    if (!articulo) {
      alert("No existe un articulo con el código especificdo")
      return;
    }
    articulo.descripcion = this.descripcion;
    articulo.precio = this.precio;

    this.limpiarCampos()
    alert("el articulo se actualizo correctamente");

  }

  //funcion auxiliar para limpiar campos
  limpiarCampos() {
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  //funcion para validar si hay registros en el arreglo
  hayArticulos(){
    return Boolean(this.articulos.length)
  }
}
