import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DatosService{

    private datos:DatosUsuario = {
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
    private url = "http://localhost:4200/api/usuarios/";

    private rol;

    constructor(private http:HttpClient){
        console.log("Servicio de datos Corriendo");
    }

    public getData(usuario:String){
        let url = "http://localhost:4200/api/usuarios/username/";
        return this.http.get(url+usuario);
    }
}

export interface DatosUsuario {
    nombre:String,
    usuario:String,
    password:String,
    rol?:Object,
    colegio?:Object,
    comuna?:String,
    cursos?:Object[],
    seccion?:String,
    modulos_aprobados:Object[],
    cursarU1:boolean,
    cursarU2:boolean,
    cursarU3:boolean,
    cursarU4:boolean
}