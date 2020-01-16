import { Component, OnInit } from '@angular/core';
import { LeccionesService } from "../shared/services/lecciones.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrarLeccionesU1 = false;
  mostrarLeccionesU2 = false;
  mostrarLeccionesU3 = false;
  mostrarLeccionesU4 = false;
  actividad1completada;
  actividad2completada;
  actividad3completada;
  actividad4completada;
  actividad5completada;

  constructor(private leccionesService:LeccionesService,
              private router:Router) { 
                localStorage.setItem("actividad1completada", "false");
              }

  ngOnInit() {
    
  }

  showL1(){
    if (this.mostrarLeccionesU1 == false){
      this.mostrarLeccionesU1 = true;
      this.mostrarLeccionesU2 = false;
      this.mostrarLeccionesU3 = false;
      this.mostrarLeccionesU4 = false;
    }else {
      this.mostrarLeccionesU1 = false;
    }
  }
  showL2(){
    if (this.mostrarLeccionesU2 == false){
      this.mostrarLeccionesU2 = true;
      this.mostrarLeccionesU1 = false;
      this.mostrarLeccionesU3 = false;
      this.mostrarLeccionesU4 = false;
    }else {
      this.mostrarLeccionesU2 = false;
    }
  }
  showL3(){
    if (this.mostrarLeccionesU3 == false){
      this.mostrarLeccionesU3 = true;
      this.mostrarLeccionesU1 = false;
      this.mostrarLeccionesU2 = false;
      this.mostrarLeccionesU4 = false;
    }else {
      this.mostrarLeccionesU3 = false;
    }
  }
  showL4(){
    if (this.mostrarLeccionesU4 == false){
      this.mostrarLeccionesU4 = true;
      this.mostrarLeccionesU1 = false;
      this.mostrarLeccionesU2 = false;
      this.mostrarLeccionesU3 = false;
    }else {
      this.mostrarLeccionesU4 = false;
    }
  }

  u1l1y2(){
    localStorage.setItem("codigoLeccion", "l8u1l1y2");
    localStorage.setItem("leccion", "L 1-2");
    localStorage.setItem("unidad", "U1");
    localStorage.setItem("curso", "Level 8");

    this.router.navigate(["/actividad1"]);
  }
  u1l3y4(){
    localStorage.setItem("codigoLeccion", "l8u1l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U1");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u1l5y6(){
    localStorage.setItem("codigoLeccion", "l8u1l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U1");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u1l7y8(){
    localStorage.setItem("codigoLeccion", "l8u1l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U1");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u2l1y2(){
    localStorage.setItem("codigoLeccion", "l8u2l1y2");
    localStorage.setItem("leccion", "L 1-2");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u2l3y4(){
    localStorage.setItem("codigoLeccion", "l8u2l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u2l5y6(){
    localStorage.setItem("codigoLeccion", "l8u2l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u2l7y8(){
    localStorage.setItem("codigoLeccion", "l8u2l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u3l1y2(){
    localStorage.setItem("codigoLeccion", "l8u3l1y2");
    localStorage.setItem("leccion", "L 1-2");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u3l3y4(){
    localStorage.setItem("codigoLeccion", "l8u3l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u3l5y6(){
    localStorage.setItem("codigoLeccion", "l8u3l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u3l7y8(){
    localStorage.setItem("codigoLeccion", "l8u3l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u4l1y2(){
    localStorage.setItem("codigoLeccion", "l8u4l1y2");
    localStorage.setItem("leccion", "L 1-2");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u4l3y4(){
    localStorage.setItem("codigoLeccion", "l8u4l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u4l5y6(){
    localStorage.setItem("codigoLeccion", "l8u4l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }
  u4l7y8(){
    localStorage.setItem("codigoLeccion", "l8u4l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/actividad1"]);
  }


}
