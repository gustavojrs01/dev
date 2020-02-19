import { Component, OnInit } from '@angular/core';
import { LeccionesService } from "../shared/services/lecciones.service";
import { DatosService, DatosUsuario } from "../shared/services/datos.service";
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
  username="gus";

  public datos:DatosUsuario = {
    nombre:"",
    usuario:"",
    password:"",
    rol:{},
    colegio:{},
    comuna:"",
    cursos:Object[""],
    seccion:"",
    modulos_aprobados:Object[""],
    cursarU1:true,
    cursarU2:false,
    cursarU3:false,
    cursarU4:false
  };

  public rol;

  constructor(private leccionesService:LeccionesService,
              private datosService:DatosService,
              private router:Router) { 
                localStorage.setItem("actividad1completada", "false");
                localStorage.setItem("actividad2completada", "false");
                localStorage.setItem("actividad3completada", "false");
                localStorage.setItem("actividad4completada", "false");
                localStorage.setItem("actividad5completada", "false");
              }

  ngOnInit() {

    this.datosService.getData(this.username).subscribe((res:DatosUsuario)=>{
      this.datos = res;  
      console.log("Estos son los datos " + this.datos.nombre);
    });
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
    localStorage.setItem("tituloContenido", "Level 8 Unit 1");
    localStorage.setItem("leccionContenido", "Lesson: 1 & 2");
    localStorage.setItem("linea1Contenido", "Wh- questions");
    localStorage.setItem("linea2Contenido", "Information and");
    localStorage.setItem("linea3Contenido", "communication technologies");
    this.router.navigate(["/contenido"]);
  }
  u1l3y4(){
    localStorage.setItem("codigoLeccion", "l8u1l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U1");
    localStorage.setItem("curso", "Level 8");
    localStorage.setItem("tituloContenido", "Level 8 Unit 1");
    localStorage.setItem("leccionContenido", "Lesson: 3 & 4");
    localStorage.setItem("linea1Contenido", "Prepositions of time");
    localStorage.setItem("linea2Contenido", "Frequency adverbs");
    localStorage.setItem("linea3Contenido", "");
    this.router.navigate(["/contenido"]);
  }
  u1l5y6(){
    localStorage.setItem("codigoLeccion", "l8u1l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U1");
    localStorage.setItem("curso", "Level 8");
    localStorage.setItem("tituloContenido", "Level 8 Unit 1");
    localStorage.setItem("leccionContenido", "Lesson: 5 & 6");
    localStorage.setItem("linea1Contenido", "Possessive adjectives");
    localStorage.setItem("linea2Contenido", "Should / Shouldn't");
    localStorage.setItem("linea3Contenido", "");    
    this.router.navigate(["/contenido"]);
  }
  u1l7y8(){
    localStorage.setItem("codigoLeccion", "l8u1l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U1");
    localStorage.setItem("curso", "Level 8");
    localStorage.setItem("tituloContenido", "Level 8 Unit 1");
    localStorage.setItem("leccionContenido", "Lesson: 7 & 8");
    localStorage.setItem("linea1Contenido", "Phonetics: Î¸ and Ã°");
    localStorage.setItem("linea2Contenido", "Review");
    localStorage.setItem("linea3Contenido", "");
    this.router.navigate(["/contenido"]);
  }
  u2l1y2(){
    localStorage.setItem("codigoLeccion", "l8u2l1y2");
    localStorage.setItem("leccion", "L 1-2");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    localStorage.setItem("tituloContenido", "Level 8 Unit 2");
    localStorage.setItem("leccionContenido", "Lesson: 1 & 2");
    localStorage.setItem("linea1Contenido", "Countries");
    localStorage.setItem("linea2Contenido", "Nationalities");
    localStorage.setItem("linea3Contenido", "Languages");
    this.router.navigate(["/contenido"]);
  }
  u2l3y4(){
    localStorage.setItem("codigoLeccion", "l8u2l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    localStorage.setItem("tituloContenido", "Level 8 Unit 2");
    localStorage.setItem("leccionContenido", "Lesson: 3 & 4");
    localStorage.setItem("linea1Contenido", "Adjectives");
    localStorage.setItem("linea2Contenido", "Comparatives");
    localStorage.setItem("linea3Contenido", "");
    this.router.navigate(["/contenido"]);
  }
  u2l5y6(){
    localStorage.setItem("codigoLeccion", "l8u2l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    localStorage.setItem("tituloContenido", "Level 8 Unit 2");
    localStorage.setItem("leccionContenido", "Lesson: 5 & 6");
    localStorage.setItem("linea1Contenido", "Superlatives");
    localStorage.setItem("linea2Contenido", "Chilean traditions: Easter Island");
    localStorage.setItem("linea3Contenido", "");
    this.router.navigate(["/contenido"]);
  }
  u2l7y8(){
    localStorage.setItem("codigoLeccion", "l8u2l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U2");
    localStorage.setItem("curso", "Level 8");
    localStorage.setItem("tituloContenido", "Level 8 Unit 2");
    localStorage.setItem("leccionContenido", "Lesson: 7 & 8");
    localStorage.setItem("linea1Contenido", "Make v/s Do");
    localStorage.setItem("linea2Contenido", "Review");
    localStorage.setItem("linea3Contenido", "");
    this.router.navigate(["/contenido"]);
  }
  u3l1y2(){
    localStorage.setItem("codigoLeccion", "l8u3l1y2");
    localStorage.setItem("leccion", "L 1-2");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }
  u3l3y4(){
    localStorage.setItem("codigoLeccion", "l8u3l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }
  u3l5y6(){
    localStorage.setItem("codigoLeccion", "l8u3l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }
  u3l7y8(){
    localStorage.setItem("codigoLeccion", "l8u3l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U3");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }
  u4l1y2(){
    localStorage.setItem("codigoLeccion", "l8u4l1y2");
    localStorage.setItem("leccion", "L 1-2");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }
  u4l3y4(){
    localStorage.setItem("codigoLeccion", "l8u4l3y4");
    localStorage.setItem("leccion", "L 3-4");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }
  u4l5y6(){
    localStorage.setItem("codigoLeccion", "l8u4l5y6");
    localStorage.setItem("leccion", "L 5-6");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }
  u4l7y8(){
    localStorage.setItem("codigoLeccion", "l8u4l7y8");
    localStorage.setItem("leccion", "L 7-8");
    localStorage.setItem("unidad", "U4");
    localStorage.setItem("curso", "Level 8");
    this.router.navigate(["/contenido"]);
  }


}
