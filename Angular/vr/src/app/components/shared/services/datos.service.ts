import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
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

    public getDatos(usuarioId:string):Observable<DatosUsuario>{
        
        return this.http.get<DatosUsuario>(this.url+usuarioId);
    }
    public getRol(rolId:string){
        return this.http.get("http://localhost:4200/api/usuarios/"+rolId)
        .subscribe(resp =>{
            // return resp
            // console.log(this.rol);
        });
    }

}

export interface DatosUsuario {
    nombre:string,
    usuario:string,
    password:string,
    rol?:{},
    colegio?:{},
    comuna?:string,
    cursos?:Object[],
    seccion?:string,
    modulos_aprobados:Object[],
    cursarU1:boolean,
    cursarU2:boolean,
    cursarU3:boolean,
    cursarU4:boolean
}

export interface Rol {
    rol:string
}