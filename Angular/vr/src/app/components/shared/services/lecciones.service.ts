import { Injectable } from '@angular/core';
// import { lecc } from "../../../../assets/content/l8u13y4.json";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LeccionesService {
    datos:{};
    cargada = false;

    archivo="l8u13y4"

    constructor(private http:HttpClient){
        console.log("servicio corriendo");
        
    }

    getDatos(leccion:string){
        this.http.get("/assets/content/"+leccion+".json")
        .subscribe(resp=>{
            this.datos = resp;
            this.cargada = true;
            console.log(this.datos);
        });
    }

}