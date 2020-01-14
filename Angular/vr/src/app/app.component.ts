import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  constructor(){
    
  }
  
  // setCodigo(){
  //   let codigo:HTMLInputElement;
  //   codigo = <HTMLInputElement>document.getElementById("codigoLeccion");
  //   localStorage.setItem("codigoLeccion", codigo.value);
  //   // this.leccionesService.codigoLeccion = codigo.value;
  //   console.log(localStorage.getItem("codigoLeccion"));
  // }
}
