import { Component } from '@angular/core';
import { LeccionesService } from "./components/shared/services/lecciones.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  codigoLeccion:string;
  constructor(private leccionesService:LeccionesService){
    this.leccionesService.cargada="Esto es el appComponent";
    console.log(this.leccionesService.cargada);
  }
  
  setCodigo(){
    let codigo:HTMLInputElement;
    codigo = <HTMLInputElement>document.getElementById("codigoLeccion");
    localStorage.setItem("codigoLeccion", codigo.value);
    // this.leccionesService.codigoLeccion = codigo.value;
    console.log(localStorage.getItem("codigoLeccion"));
  }
}
