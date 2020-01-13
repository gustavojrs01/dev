import { Injectable } from '@angular/core';
// import { lecc } from "../../../../assets/content/l8u13y4.json";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LeccionesService {
    datos;
    cargada:string;

    archivo="l8u13y4";

    constructor(private http:HttpClient){
        console.log("servicio lecciones corriendo");
        
        
    }
    
    getDatos(leccion:string){
            this.http.get("/assets/content/"+leccion+".json")
            .subscribe(resp=>{
                    this.datos = resp;
                    this.cargada = true;
                    // console.log(this.datos);            
                });        
            }
            
    //         getConfig(leccion:string) {
    //             let datosLeccion = this.http.get("/assets/content/"+leccion+".json");
    //             // this.datos = datosLeccion;
    //             console.log(datosLeccion);                
    //   }

    
}

export interface Lecciones {
    curso:string,
    unidad:string,
    leccion:string,
    act1:string[],
    act2:string[],
    act3:string[],
    act4:string[],
    act5:string[]
  }