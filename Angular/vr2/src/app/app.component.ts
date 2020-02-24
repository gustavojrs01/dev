import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
 
  constructor(){
    
  }

  ngOnInit(){
    const usuario = localStorage.getItem('VrUser');
    console.log("Bienvenido "+usuario);
    
  }
  
  // setCodigo(){
  //   let codigo:HTMLInputElement;
  //   codigo = <HTMLInputElement>document.getElementById("codigoLeccion");
  //   localStorage.setItem("codigoLeccion", codigo.value);
  //   // this.leccionesService.codigoLeccion = codigo.value;
  //   console.log(localStorage.getItem("codigoLeccion"));
  // }
}
