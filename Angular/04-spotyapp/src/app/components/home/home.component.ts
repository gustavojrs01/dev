import { Component, OnInit } from '@angular/core';
import { NgxSoapService, Client, ISoapMethodResponse } from "ngx-soap";


angular.module('spotyApp', ['angularSoap']);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cliente:Client;
  usuario="test2zs";
  clave="123";
  codigo="Level 8_u1_pretest1";
  message:any;
  
  constructor(private soap:NgxSoapService) { 
    this.soap.createClient('https://plataforma.zs.ela.cl/wss.php?wsdl').subscribe(cliente=>this.cliente = cliente);
    console.log("Ejecutando constructor");
    console.log(this.cliente);
    console.log("Constructor ejecutado");
  }

  login(){
    const body = {
      usuario:this.usuario,
      clave:this.clave,
      modulo:this.codigo
    };
    (<any>this.cliente).Add(body).subscribe((res:ISoapMethodResponse)=> this.message = res.result.AddResult);
  }

  ngOnInit(): void { 
    this.login();
    console.log(this.message);
  }
}

